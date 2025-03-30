// import { useState, useEffect } from "react";

// function Quizzes() {
//   const [quizData, setQuizData] = useState({});
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
//     <section className="quiz-section">
//       <h2>Cybersecurity Quiz</h2>
//       {!quizStarted ? (
//         <div>
//           <p>You're starting the {selectedDifficulty} quiz.</p>
//           <button className="start-button" onClick={startQuiz}>Start Quiz</button>
//         </div>
//       ) : !quizCompleted ? (
//         <div>
//           <h3>Question {currentQuestion + 1}: {quizData[selectedDifficulty]?.questions[currentQuestion]?.question}</h3>
//           <ul>
//             {Object.entries(quizData[selectedDifficulty]?.questions[currentQuestion]?.options || {}).map(([key, value]) => (
//               <li key={key} onClick={() => setUserAnswer(key)} className={userAnswer === key ? "selected" : ""}>
//                 {key}: {value}
//               </li>
//             ))}
//           </ul>
//           <button className="submit-button" onClick={handleSubmitAnswer}>Submit</button>
//         </div>
//       ) : (
//         <div>
//           <p>Your Score: {score}/{quizData[selectedDifficulty].questions.length}</p>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Quizzes;

// // CSS Styling
// const styles = `
//   .quiz-section {
//     background: white;
//     padding: 20px;
//     border-radius: 5px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   }
//   h2 {
//     color: #2c3e50;
//   }
//   .start-button, .submit-button {
//     padding: 10px 20px;
//     border: none;
//     color: white;
//     cursor: pointer;
//     font-size: 16px;
//     border-radius: 5px;
//   }
//   .start-button {
//     background: #2980b9;
//   }
//   .start-button:hover {
//     background: #1f6690;
//   }
//   .submit-button {
//     background: #27ae60;
//   }
//   .submit-button:hover {
//     background: #1d8a4d;
//   }
//   ul {
//     list-style: none;
//     padding: 0;
//   }
//   li {
//     padding: 8px;
//     cursor: pointer;
//     background: #f4f4f4;
//     margin: 5px 0;
//     border-radius: 5px;
//   }
//   li:hover {
//     background: #ddd;
//   }
//   .selected {
//     background: #27ae60;
//     color: white;
//   }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

import { useState, useEffect } from "react";

function Quizzes() {
  const [quizData, setQuizData] = useState({});
  const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [unlockedLevels, setUnlockedLevels] = useState(["beginner"]); // Track unlocked levels

  useEffect(() => {
    fetch("/quiz_questions.json")
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error loading quiz data:", error));
  }, []);

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
      unlockNextLevel();
    }
  }

  function unlockNextLevel() {
    const levels = ["beginner", "intermediate", "advanced"];
    const currentIndex = levels.indexOf(selectedDifficulty);
    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      setUnlockedLevels([...unlockedLevels, nextLevel]);
    }
  }

  function handleNextLevel() {
    const levels = ["beginner", "intermediate", "advanced"];
    const currentIndex = levels.indexOf(selectedDifficulty);
    if (currentIndex < levels.length - 1) {
      setSelectedDifficulty(levels[currentIndex + 1]);
      setQuizStarted(false);
      setQuizCompleted(false);
    }
  }

  return (
    <section className="quiz-section">
      <h2>Cybersecurity Quiz</h2>

      {!quizStarted ? (
        <div>
          <p>You're starting the {selectedDifficulty} quiz.</p>
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
          {selectedDifficulty !== "advanced" && unlockedLevels.includes(selectedDifficulty) && (
            <button className="next-button" onClick={handleNextLevel}>Proceed to {selectedDifficulty === "beginner" ? "Intermediate" : "Advanced"} Quiz</button>
          )}
        </div>
      )}
    </section>
  );
}

export default Quizzes;

// CSS Styling
const styles = `
  .quiz-section {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    color: #2c3e50;
  }
  .start-button, .submit-button, .next-button {
    padding: 10px 20px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
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
  .next-button {
    background: #f39c12;
  }
  .next-button:hover {
    background: #e67e22;
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
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

