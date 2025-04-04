import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../FIREBASE/components/auth";
import { getUserQuizResults, getUserProgress, getUserCertificates } from "../FIREBASE/firestore/firestore";
import DashboardSidebar from "./components/dashboardSidebar";
import Quizzes from "./components/quizzes";
import Lessons from "./components/lessons";
import Simulations from "./components/simulations";

function Dashboard({ user }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard"); // default section
  const [quizResults, setQuizResults] = useState([]);
  const [progress, setProgress] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [currentTip, setCurrentTip] = useState("");

  // Fetch Firestore Data
  useEffect(() => {
    if (user) {
      getUserQuizResults(user.uid).then(setQuizResults);

      
      getUserProgress(user.uid).then((data) => {
        console.log("Fetched Progress Data:", data); 

        if (!data) {
          console.warn("No progress data found, skipping update.");
          return; // Avoid setting incorrect state
        }
  
        const updatedProgress = {
          completedLessons: data?.currentLevel || 0,
          totalLessons: 3, // or however many lessons you have in total
        };
        setProgress(updatedProgress);
        console.log("Updated State:", updatedProgress); // Debugging log
      });
    }
  }, [user]);
  
  
  // Load Daily Tips from quiz_questions.json
  useEffect(() => {
    fetch("/quiz_questions.json")
      .then((response) => response.json())
      .then((data) => {
        updateTip(data);
      })
      .catch((error) => console.error("Error loading tips:", error));
  }, []);

  // Function to update tip dynamically
  function updateTip(questionsData) {
    const allTips = [
      ...questionsData.beginner.questions.map((q) => q.tip),
      ...questionsData.intermediate.questions.map((q) => q.tip),
      ...questionsData.advanced.questions.map((q) => q.tip),
    ];
    const randomTip = allTips[Math.floor(Math.random() * allTips.length)];
    setCurrentTip(randomTip);
  }

  // Function to trigger tip update on user interaction
  function handleUserInteraction() {
    fetch("/quiz_questions.json")
      .then((response) => response.json())
      .then(updateTip);
  }

  async function handleLogout() {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  return (
    <div className="container" onClick={handleUserInteraction}>
      <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} handleLogout={handleLogout} />
      <div className="main-content">
        {activeSection === "dashboard" && (
          <section>
           <div className="first"> <h2>Welcome to your dashboard 🤗</h2>
            <p>This is your cybersecurity dashboard.</p></div>

            <div className="dashboard-overview">
              {/* Lessons Progress */}
              {progress && (
  <div className="card large">
  <h3>Completed Lessons</h3>
  <p>{progress?.completedLessons} / {progress?.totalLessons} lessons</p>
</div>
)}

              <div className="right-cards">
                {/* Quiz Results */}
                <div className="card">
                  <h3>Attempted Quizzes</h3>
                  <p>{quizResults.length}</p>
                </div>

                {/* Certificates */}
                <div className="card">
                  <h3>Credits Earned</h3>
                  <p>{certificates.length} / 20</p>
                </div>
              </div>
            </div>

            {/* Daily Tip */}
            <div className="tips">
              <h3>Daily Tips:</h3>
              <p>"{currentTip}"</p>
            </div>
          </section>
        )}

        {activeSection === "quizzes" && <Quizzes />}
        {activeSection === "lessons" && <Lessons setActiveSection={setActiveSection} user={user} />}
        {activeSection === "simulations" && <Simulations />}
      </div>
    </div>
  );
}

export default Dashboard;


// CSS Styling
const styles = `
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background: rgb(187, 241, 243);
  }
  .main-content {
    flex-grow: 1;
    margin-left: 290px;
    margin-bottom: 40px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    padding: 1px;
    background: rgb(187, 241, 243);
    overflow: auto;

  }
  section {
    background: rgb(187, 241, 243);
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
    .first {
    text-align: center;
    margin-top:-100px;
    margin-bottom: 80px;
    f
    }
  h2 {
    color: #2c3e50;
   font-size: 40px;
   font -weight: bold;
  }
  p {
    font-size: 16px;
    color: #333;
  }
  .tips {
    background: #f1c40f;
    padding: 15px;
    border-radius: 40px;
    margin-top: 50px;
    font-weight: bold;
    text-align: left;
    display: flex;
  }
  .tips h3 {
    margin: 5px;
    color: #2c3e50;
    padding: 0;
  }
  .tips p {
    margin: 5px;
    padding: 1px;
    font-style: italic;
  }
  .dashboard-overview {
   display: grid;
   grid-template-columns: 2fr 1fr; /* Left card is bigger */
  gap: -10px;
   margin-bottom: 20px;
  }

  .right-cards {
   display: flex;
   flex-direction: column;
   gap: 20px;
  }

  .card {
   background: rgba(9, 6, 189, 0.4);
   padding: 20px;
   border-radius: 20px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   text-align: center;
  }

  .large {
   height: 80%;
   width: 80%;
   padding: 20px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

