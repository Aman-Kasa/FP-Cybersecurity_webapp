/*import { useNavigate } from "react-router-dom";
import { logoutUser } from "../FIREBASE/components/auth";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {user?.email}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
*/
// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useEffect, useState } from "react";

// const Dashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState(null);

//   useEffect(() => {
//     fetch("/quiz_questions.json") // Adjust this path if needed
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Quiz Data Loaded:", data);
//         setQuizData(data);
//       })
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login"); // Redirect to login after logout
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Welcome, {user?.email}!</h2>
//       <button onClick={handleLogout}>Logout</button>

//       <h3>Cybersecurity Quiz</h3>
//       {quizData ? (
//         <ul>
//           {quizData.beginner.questions.map((q, index) => (
//             <li key={index}>{q.question}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading quiz...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useState, useEffect } from "react";

// const Dashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState(null);
//   const [activeSection, setActiveSection] = useState("dashboard"); // Track active section

//   useEffect(() => {
//     fetch("/quiz_questions.json")
//       .then((response) => response.json())
//       .then((data) => setQuizData(data))
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <nav className="sidebar">
//         <h2>CyberShield</h2>
//         <ul>
//           <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("lessons")}>Lessons</li>
//           <li onClick={() => setActiveSection("simulations")}>Simulations</li>
//           <li onClick={() => setActiveSection("quizzes")}>Quizzes</li>
//         </ul>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>

//       {/* Main Content Area */}
//       <div className="main-content">
//         {activeSection === "dashboard" && (
//           <section>
//             <h2>Welcome, {user?.email}!</h2>
//             <p>This is your cybersecurity dashboard.</p>
//           </section>
//         )}

//         {activeSection === "lessons" && (
//           <section>
//             <h2>Lessons</h2>
//             <p>Here you will find cybersecurity lessons.</p>
//           </section>
//         )}

//         {activeSection === "simulations" && (
//           <section>
//             <h2>Simulations</h2>
//             <p>Practice real-world cybersecurity scenarios.</p>
//           </section>
//         )}

//         {activeSection === "quizzes" && (
//           <section>
//             <h2>Cybersecurity Quiz</h2>
//             {quizData ? (
//               <ul>
//                 {quizData.beginner.questions.map((q, index) => (
//                   <li key={index}>{q.question}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>Loading quiz...</p>
//             )}
//           </section>
//         )}
//       </div>

//       {/* Styles */}
//       <style>
//         {`
//           .container {
//             display: flex;
//             height: 100vh;
//           }
//           .sidebar {
//             width: 250px;
//             background: #2c3e50;
//             color: white;
//             padding: 20px;
//             display: flex;
//             flex-direction: column;
//           }
//           .sidebar h2 {
//             text-align: center;
//           }
//           .sidebar ul {
//             list-style: none;
//             padding: 0;
//           }
//           .sidebar li {
//             padding: 10px;
//             cursor: pointer;
//           }
//           .sidebar li:hover {
//             background: #34495e;
//           }
//           .main-content {
//             flex-grow: 1;
//             padding: 20px;
//             background: #ecf0f1;
//           }
//           button {
//             margin-top: auto;
//             padding: 10px;
//             background: #e74c3c;
//             border: none;
//             color: white;
//             cursor: pointer;
//           }
//           button:hover {
//             background: #c0392b;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Dashboard;

// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useState, useEffect } from "react";

// const Dashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState({}); // Set an empty object as default
//   const [activeSection, setActiveSection] = useState("dashboard"); // Track active section
//   const [selectedDifficulty, setSelectedDifficulty] = useState("beginner"); // Track quiz difficulty
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswer, setUserAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     fetch("/quiz_questions.json")
//       .then((response) => response.json())
//       .then((data) => setQuizData(data))
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   const handleAnswerClick = (answer) => {
//     const currentQuiz = quizData[selectedDifficulty]?.questions[currentQuestion];
//     if (!currentQuiz) return;

//     setUserAnswer(answer);
//     if (answer === currentQuiz.answer) {
//       setScore(score + 1);
//     }
//     setTimeout(() => {
//       if (currentQuestion + 1 < quizData[selectedDifficulty]?.questions.length) {
//         setCurrentQuestion(currentQuestion + 1);
//         setUserAnswer(null);
//       } else {
//         setQuizCompleted(true);
//       }
//     }, 1000);
//   };

//   return (
//     <>
//     <div className="container">
//       {/* Sidebar */}
//       <nav className="sidebar">
//         <h2>CyberShield</h2>
//         <ul>
//           <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("lessons")}>Lessons</li>
//           <li onClick={() => setActiveSection("simulations")}>Simulations</li>
//           <li onClick={() => setActiveSection("quizzes")}>Quizzes</li>
//         </ul>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>

//       {/* Main Content Area */}
//       <div className="main-content">
//         {activeSection === "dashboard" && (
//           <section>
//             <h2>Welcome, {user?.email}!</h2>
//             <p>This is your cybersecurity dashboard.</p>
//           </section>
//         )}

//         {activeSection === "lessons" && (
//           <section>
//             <h2>Lessons</h2>
//             <p>Here you will find cybersecurity lessons.</p>
//           </section>
//         )}

//         {activeSection === "simulations" && (
//           <section>
//             <h2>Simulations</h2>
//             <p>Practice real-world cybersecurity scenarios.</p>
//           </section>
//         )}

//         {activeSection === "quizzes" && (
//           <section>
//             <h2>Cybersecurity Quiz</h2>
//             {quizData[selectedDifficulty]?.questions?.length > 0 ? (
//               quizCompleted ? (
//                 <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
//               ) : (
//                 <div>
//                   <label>Select Difficulty:</label>
//                   <select onChange={(e) => setSelectedDifficulty(e.target.value)} value={selectedDifficulty}>
//                     <option value="beginner">Beginner</option>
//                     <option value="intermediate">Intermediate</option>
//                     <option value="advanced">Advanced</option>
//                   </select>

//                   <h3>{quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
//                   <ul>
//                     {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
//                       <li key={key} onClick={() => handleAnswerClick(key)}>
//                         {key}: {value}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )
//             ) : (
//               <p>Loading quiz...</p>
//             )}
//           </section>
//         )}
//       </div>
//     </div>


// export default Dashboard;


//       {/* Styles */}
//       <style>
//         {`
//           .container {
//             display: flex;
//             height: 100vh;
//           }
//           .sidebar {
//             width: 250px;
//             background: #2c3e50;
//             color: white;
//             padding: 20px;
//             display: flex;
//             flex-direction: column;
//           }
//           .sidebar h2 {
//             text-align: center;
//           }
//           .sidebar ul {
//             list-style: none;
//             padding: 0;
//           }
//           .sidebar li {
//             padding: 10px;
//             cursor: pointer;
//             color: black;
//           }
//           .sidebar li:hover {
//             background:rgb(10, 235, 197);
//           }
//           .main-content {
//             flex-grow: 1;
//             padding: 20px;
//             background: #ecf0f1;
//           }
//           button {
//             margin-top: auto;
//             padding: 10px;
//             background: #e74c3c;
//             border: none;
//             color: white;
//             cursor: pointer;
//           }
//           button:hover {
//             background: #c0392b;
//           }
//           select {
//             margin: 10px 0;
//             padding: 5px;
//           }
//           ul {
//             list-style: none;
//             padding: 0;
//           }
//           li {
//             padding: 8px;
//             cursor: pointer;
//             background: #f4f4f4;
//             margin: 5px 0;
//             border-radius: 5px;
//           }
//           li:hover {
//             background: #ddd;
//           }
//         `}
//       </style>
// </>
//   );
// };

// export default Dashboard;

// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useState, useEffect } from "react";

// const Dashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState({});
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);

//   useEffect(() => {
//     fetch("/quiz_questions.json")
//       .then((response) => response.json())
//       .then((data) => setQuizData(data))
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setCurrentQuestion(0);
//     setScore(0);
//     setQuizCompleted(false);
//   };

//   const handleSubmitAnswer = (answer) => {
//     const currentQuiz = quizData[selectedDifficulty]?.questions[currentQuestion];
//     if (!currentQuiz) return;

//     if (answer === currentQuiz.answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
    
//     if (currentQuestion + 1 < quizData[selectedDifficulty]?.questions.length) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   return (
//     <div className="container">
//       <nav className="sidebar">
//         <h2>CyberShield</h2>
//         <ul>
//           <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("lessons")}>Lessons</li>
//           <li onClick={() => setActiveSection("simulations")}>Simulations</li>
//           <li onClick={() => setActiveSection("quizzes")}>Quizzes</li>
//         </ul>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>

//       <div className="main-content">
//         {activeSection === "dashboard" && (
//           <section>
//             <h2>Welcome, {user?.email}!</h2>
//             <p>This is your cybersecurity dashboard.</p>
//           </section>
//         )}

//         {activeSection === "quizzes" && (
//           <section>
//             <h2>Cybersecurity Quiz</h2>
//             {!quizStarted ? (
//               <div>
//                 <p>You're starting the {selectedDifficulty} quiz.</p>
//                 <p>Get ready for some questions to test your knowledge.</p>
//                 <button onClick={startQuiz}>Start Quiz</button>
//               </div>
//             ) : !quizCompleted ? (
//               <div>
//                 <h3>{quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
//                 <ul>
//                   {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
//                     <li key={key} onClick={() => handleSubmitAnswer(key)}>
//                       {key}: {value}
//                     </li>
//                   ))}
//                 </ul>
//                 <button onClick={() => handleSubmitAnswer()}>Submit</button>
//               </div>
//             ) : (
//               <div>
//                 <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
//                 {selectedDifficulty !== "advanced" && (
//                   <button onClick={() => {
//                     setSelectedDifficulty(
//                       selectedDifficulty === "beginner" ? "intermediate" : "advanced"
//                     );
//                     setQuizStarted(false);
//                   }}>
//                     Proceed to {selectedDifficulty === "beginner" ? "Intermediate" : "Advanced"} Quiz
//                   </button>
//                 )}
//               </div>
//             )}
//           </section>
//         )}
//       </div>

//       <style>
//         {`
//           .container {
//             display: flex;
//             height: 100vh;
//           }
//           .sidebar {
//             width: 250px;
//             background: #2c3e50;
//             color: white;
//             padding: 20px;
//             display: flex;
//             flex-direction: column;
//           }
//           .sidebar h2 {
//             text-align: center;
//           }
//           .sidebar ul {
//             list-style: none;
//             padding: 0;
//           }
//           .sidebar li {
//             padding: 10px;
//             cursor: pointer;
//             color: black;
//           }
//           .sidebar li:hover {
//             background: rgb(10, 235, 197);
//           }
//           .main-content {
//             flex-grow: 1;
//             padding: 20px;
//             background: #ecf0f1;
//           }
//           button {
//             margin-top: 10px;
//             padding: 10px;
//             background: #e74c3c;
//             border: none;
//             color: white;
//             cursor: pointer;
//           }
//           button:hover {
//             background: #c0392b;
//           }
//           select {
//             margin: 10px 0;
//             padding: 5px;
//           }
//           ul {
//             list-style: none;
//             padding: 0;
//           }
//           li {
//             padding: 8px;
//             cursor: pointer;
//             background: #f4f4f4;
//             margin: 5px 0;
//             border-radius: 5px;
//           }
//           li:hover {
//             background: #ddd;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Dashboard;



// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useState, useEffect } from "react";

// const Dashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState({});
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [userAnswer, setUserAnswer] = useState(null);

//   useEffect(() => {
//     fetch("/quiz_questions.json")
//       .then((response) => response.json())
//       .then((data) => setQuizData(data))
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setCurrentQuestion(0);
//     setScore(0);
//     setQuizCompleted(false);
//     setUserAnswer(null);
//   };

//   const handleSubmitAnswer = () => {
//     const currentQuiz = quizData[selectedDifficulty]?.questions[currentQuestion];
//     if (!currentQuiz || userAnswer === null) return;

//     if (userAnswer === currentQuiz.answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
    
//     if (currentQuestion + 1 < quizData[selectedDifficulty]?.questions.length) {
//       setCurrentQuestion((prev) => prev + 1);
//       setUserAnswer(null);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   return (
//     <div className="container">
//       <nav className="sidebar">
//         <h2>CyberShield</h2>
//         <ul>
//           <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("lessons")}>Lessons</li>
//           <li onClick={() => setActiveSection("simulations")}>Simulations</li>
//           <li onClick={() => setActiveSection("quizzes")}>Quizzes</li>
//         </ul>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </nav>

//       <div className="main-content">
//         {activeSection === "dashboard" && (
//           <section>
//             <h2>Welcome, {user?.email}!</h2>
//             <p>This is your cybersecurity dashboard.</p>
//           </section>
//         )}

//         {activeSection === "quizzes" && (
//           <section>
//             <h2>Cybersecurity Quiz</h2>
//             {!quizStarted ? (
//               <div>
//                 <p>You're starting the {selectedDifficulty} quiz.</p>
//                 <p>Get ready for some questions to test your knowledge.</p>
//                 <button onClick={startQuiz}>Start Quiz</button>
//               </div>
//             ) : !quizCompleted ? (
//               <div>
//                 <h3>{quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
//                 <ul>
//                   {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
//                     <li key={key} onClick={() => setUserAnswer(key)} className={userAnswer === key ? "selected" : ""}>
//                       {key}: {value}
//                     </li>
//                   ))}
//                 </ul>
//                 <button onClick={handleSubmitAnswer}>Submit</button>
//               </div>
//             ) : (
//               <div>
//                 <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
//                 {selectedDifficulty !== "advanced" && (
//                   <button onClick={() => {
//                     setSelectedDifficulty(
//                       selectedDifficulty === "beginner" ? "intermediate" : "advanced"
//                     );
//                     setQuizStarted(false);
//                   }}>
//                     Proceed to {selectedDifficulty === "beginner" ? "Intermediate" : "Advanced"} Quiz
//                   </button>
//                 )}
//               </div>
//             )}
//           </section>
//         )}
//       </div>

//       <style>
//         {`
//           .container {
//             display: flex;
//             height: 100vh;
//           }
//           .sidebar {
//             width: 250px;
//             background: #2c3e50;
//             color: white;
//             padding: 20px;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//           }
//           .sidebar h2 {
//             text-align: center;
//           }
//           .sidebar ul {
//             list-style: none;
//             padding: 0;
//             flex-grow: 1;
//           }
//           .sidebar li {
//             padding: 10px;
//             cursor: pointer;
//             color: black;
//           }
//           .sidebar li:hover {
//             background: rgb(10, 235, 197);
//           }
//           .main-content {
//             flex-grow: 1;
//             padding: 20px;
//             background: #ecf0f1;
//           }
//           .logout-button {
//             margin-top: auto;
//             padding: 10px;
//             background: #e74c3c;
//             border: none;
//             color: white;
//             cursor: pointer;
//           }
//           .logout-button:hover {
//             background: #c0392b;
//           }
//           select {
//             margin: 10px 0;
//             padding: 5px;
//           }
//           ul {
//             list-style: none;
//             padding: 0;
//           }
//           li {
//             padding: 8px;
//             cursor: pointer;
//             background: #f4f4f4;
//             margin: 5px 0;
//             border-radius: 5px;
//           }
//           li:hover {
//             background: #ddd;
//           }
//           .selected {
//             background: #27ae60;
//             color: white;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Dashboard;

// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../FIREBASE/components/auth";
// import { useState, useEffect } from "react";

// function Dashboard({ user }) {
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState({});
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [userAnswer, setUserAnswer] = useState(null);

//   useEffect(() => {
//     fetch("/quiz_questions.json")
//       .then((response) => response.json())
//       .then((data) => setQuizData(data))
//       .catch((error) => console.error("Error loading quiz data:", error));
//   }, []);

//   async function handleLogout() {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   }

//   function startQuiz() {
//     setQuizStarted(true);
//     setCurrentQuestion(0);
//     setScore(0);
//     setQuizCompleted(false);
//     setUserAnswer(null);
//   }

//   function handleSubmitAnswer() {
//     const currentQuiz = quizData[selectedDifficulty]?.questions[currentQuestion];
//     if (!currentQuiz || userAnswer === null) return;

//     if (userAnswer === currentQuiz.answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
    
//     if (currentQuestion + 1 < quizData[selectedDifficulty]?.questions.length) {
//       setCurrentQuestion((prev) => prev + 1);
//       setUserAnswer(null);
//     } else {
//       setQuizCompleted(true);
//     }
//   }

//   return (
//     <div className="container">
//       <nav className="sidebar">
//         <h2>CyberShield</h2>
//         <ul>
//           <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("lessons")}>Lessons</li>
//           <li onClick={() => setActiveSection("simulations")}>Simulations</li>
//           <li onClick={() => setActiveSection("quizzes")}>Quizzes</li>
//         </ul>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </nav>

//       <div className="main-content">
//         {activeSection === "dashboard" && (
//           <section>
//             <h2>Welcome, {user?.email}!</h2>
//             <p>This is your cybersecurity dashboard.</p>
//           </section>
//         )}

//         {activeSection === "quizzes" && (
//           <section>
//             <h2>Cybersecurity Quiz</h2>
//             {!quizStarted ? (
//               <div>
//                 <p>You're starting the {selectedDifficulty} quiz.</p>
//                 <p>Get ready for some questions to test your knowledge.</p>
//                 <button className="start-button" onClick={startQuiz}>Start Quiz</button>
//               </div>
//             ) : !quizCompleted ? (
//               <div>
//                 <h3>Question {currentQuestion + 1}: {quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
//                 <ul>
//                   {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
//                     <li key={key} onClick={() => setUserAnswer(key)} className={userAnswer === key ? "selected" : ""}>
//                       {key}: {value}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="submit-button" onClick={handleSubmitAnswer}>Submit</button>
//               </div>
//             ) : (
//               <div>
//                 <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
//                 {selectedDifficulty !== "advanced" && (
//                   <button className="start-button" onClick={() => {
//                     setSelectedDifficulty(
//                       selectedDifficulty === "beginner" ? "intermediate" : "advanced"
//                     );
//                     setQuizStarted(false);
//                   }}>
//                     Proceed to {selectedDifficulty === "beginner" ? "Intermediate" : "Advanced"} Quiz
//                   </button>
//                 )}
//               </div>
//             )}
//           </section>
//         )}
//       </div>

//       <style>
//         {`
//           .container {
//             display: flex;
//             height: 100vh;
//           }
//           .sidebar {
//             width: 250px;
//             background: #2c3e50;
//             color: white;
//             padding: 20px;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//           }
//           .sidebar h2 {
//             text-align: center;
//           }
//           .sidebar ul {
//             list-style: none;
//             padding: 0;
//             flex-grow: 1;
//           }
//           .sidebar li {
//             padding: 10px;
//             cursor: pointer;
//             color: black;
//           }
//           .sidebar li:hover {
//             background: rgb(10, 235, 197);
//           }
//           .main-content {
//             flex-grow: 1;
//             padding: 20px;
//             background: #ecf0f1;
//           }
//           .logout-button, .start-button, .submit-button {
//             padding: 10px 20px;
//             border: none;
//             color: white;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             transition: background 0.3s;
//           }
//           .logout-button {
//             background: #e74c3c;
//           }
//           .logout-button:hover {
//             background: #c0392b;
//           }
//           .start-button {
//             background: #2980b9;
//           }
//           .start-button:hover {
//             background: #1f6690;
//           }
//           .submit-button {
//             background: #27ae60;
//           }
//           .submit-button:hover {
//             background: #1d8a4d;
//           }
//           ul {
//             list-style: none;
//             padding: 0;
//           }
//           li {
//             padding: 8px;
//             cursor: pointer;
//             background: #f4f4f4;
//             margin: 5px 0;
//             border-radius: 5px;
//           }
//           li:hover {
//             background: #ddd;
//           }
//           .selected {
//             background: #27ae60;
//             color: white;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Dashboard;

import { useNavigate } from "react-router-dom";
import { logoutUser } from "../FIREBASE/components/auth";
import { useState, useEffect } from "react";

function Dashboard({ user }) {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({});
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    fetch("/quiz_questions.json")
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error loading quiz data:", error));
  }, []);

  async function handleLogout() {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  function startQuiz() {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswer(null);
  }

  function handleSubmitAnswer() {
    const currentQuiz = quizData[selectedDifficulty]?.questions[currentQuestion];
    if (!currentQuiz || userAnswer === null) return;

    if (userAnswer === currentQuiz.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    
    if (currentQuestion + 1 < quizData[selectedDifficulty]?.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  }

  return (
    <div className="container">
      <nav className="sidebar">
        <h2>CyberShield</h2>
        <ul>
          <li className={activeSection === "dashboard" ? "active" : ""} onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li className={activeSection === "lessons" ? "active" : ""} onClick={() => setActiveSection("lessons")}>Lessons</li>
          <li className={activeSection === "simulations" ? "active" : ""} onClick={() => setActiveSection("simulations")}>Simulations</li>
          <li className={activeSection === "quizzes" ? "active" : ""} onClick={() => setActiveSection("quizzes")}>Quizzes</li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="main-content">
        {activeSection === "dashboard" && (
          <section>
            <h2>Welcome, {user?.email}!</h2>
            <p>This is your cybersecurity dashboard.</p>
          </section>
        )}

        {activeSection === "quizzes" && (
          <section>
            <h2>Cybersecurity Quiz</h2>
            {!quizStarted ? (
              <div>
                <p>You're starting the {selectedDifficulty} quiz.</p>
                <p>Get ready for some questions to test your knowledge.</p>
                <button className="start-button" onClick={startQuiz}>Start Quiz</button>
              </div>
            ) : !quizCompleted ? (
              <div>
                <h3>Question {currentQuestion + 1}: {quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
                <ul>
                  {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
                    <li key={key} onClick={() => setUserAnswer(key)} className={userAnswer === key ? "selected" : ""}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
                <button className="submit-button" onClick={handleSubmitAnswer}>Submit</button>
              </div>
            ) : (
              <div>
                <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
                {selectedDifficulty !== "advanced" && (
                  <button className="start-button" onClick={() => {
                    setSelectedDifficulty(
                      selectedDifficulty === "beginner" ? "intermediate" : "advanced"
                    );
                    setQuizStarted(false);
                  }}>
                    Proceed to {selectedDifficulty === "beginner" ? "Intermediate" : "Advanced"} Quiz
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </div>

      <style>
        {`
          .container {
            display: flex;
            height: 100vh;
          }
          .sidebar {
            width: 250px;
            background: #2c3e50;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .sidebar h2 {
            text-align: center;
          }
          .sidebar ul {
            list-style: none;
            padding: 0;
            flex-grow: 1;
          }
          .sidebar li {
            padding: 10px;
            cursor: pointer;
            color: black;
          }
          .sidebar li:hover, .sidebar .active {
            background: rgb(10, 235, 197);
            font-weight: bold;
          }
          .main-content {
            flex-grow: 1;
            padding: 20px;
            background: #ecf0f1;
          }
          .logout-button, .start-button, .submit-button {
            padding: 10px 20px;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            transition: background 0.3s;
          }
          .logout-button {
            background: #e74c3c;
          }
          .logout-button:hover {
            background: #c0392b;
          }
          .start-button {
            background: #2980b9;
          }
          .start-button:hover {
            background: #1f6690;
          }
          .submit-button {
            background: #27ae60;
          }
          .submit-button:hover {
            background: #1d8a4d;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            padding: 8px;
            cursor: pointer;
            background: #f4f4f4;
            margin: 5px 0;
            border-radius: 5px;
          }
          li:hover {
            background: #ddd;
          }
          .selected {
            background: #27ae60;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;


