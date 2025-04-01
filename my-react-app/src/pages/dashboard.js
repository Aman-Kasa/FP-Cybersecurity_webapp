
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../FIREBASE/components/auth";
import DashboardSidebar from "./components/dashboardSidebar";
import Quizzes from "./components/quizzes";
import Lessons from "./components/lessons";
import Simulations from "./components/simulations";

function Dashboard({ user }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  async function handleLogout() {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  return (
    <div className="container">
      <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} handleLogout={handleLogout} />
      <div className="main-content">
        {activeSection === "dashboard" && (
          <section>
            <h2>Welcome, {user?.email}!</h2>
            <p>This is your cybersecurity dashboard.</p>
          </section>
        )}
        {activeSection === "quizzes" && <Quizzes />}
        {activeSection === "lessons" && <Lessons />}
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
  }
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background: #ecf0f1;
  }
  section {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    color: #2c3e50;
  }
  p {
    font-size: 16px;
    color: #333;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
