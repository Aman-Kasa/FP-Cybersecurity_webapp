import { useState } from 'react';

function Simulations() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const simulations = [
    {
      question: "You receive an email saying: 'Your bank account is compromised! Click here to secure it now!' What should you do?",
      options: [
        "Click the link and login",
        "Ignore it and delete the email",
        "Reply asking for more info",
        "Report the email as phishing"
      ],
      correct: 3,
      explanation: "Always report suspicious emails instead of clicking or replying."
    },
    {
      question: "You want to set a password: 12345678. Is this a good password?",
      options: [
        "Yes, it’s long",
        "No, it's too common",
        "Yes, easy to remember",
        "It’s okay for now"
      ],
      correct: 1,
      explanation: "'12345678' is one of the most commonly hacked passwords."
    },
    {
      question: "You’re at a coffee shop and connect to free Wi-Fi. You need to check your bank balance. What should you do?",
      options: [
        "Go ahead and log in",
        "Use a VPN before logging in",
        "Ask the cashier if it's safe",
        "Don’t use public Wi-Fi ever"
      ],
      correct: 1,
      explanation: "A VPN encrypts your traffic on public Wi-Fi."
    },
    {
      question: "Your friend sends you a link saying 'Check out these crazy photos of you!' What should you do?",
      options: [
        "Click the link immediately",
        "Ignore and delete the message",
        "Ask your friend if they sent it",
        "Block your friend"
      ],
      correct: 2,
      explanation: "Check with your friend first—this could be a hacked account or scam."
    },
    {
      question: "You get a text from 'Your bank' asking for your PIN. What’s the best response?",
      options: [
        "Reply with the PIN",
        "Call the number in the text",
        "Ignore the message and contact your bank through official channels",
        "Text back 'Who is this?'"
      ],
      correct: 2,
      explanation: "Never share personal details through text. Contact your bank directly."
    }
  ];

  const simulation = simulations[step];

  const handleCheck = () => {
    if (selected !== null) {
      setChecked(true);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
    setSelected(null);
    setChecked(false);
  };

  const isCorrect = selected === simulation.correct;

  return (
    <section style={styles.container}>
      <div><h2 style={styles.title}>Simulations</h2>
      <p style={styles.subtitle}>Practice real-world cybersecurity scenarios.</p>
      </div>

      <div style={styles.card}>
        <p style={styles.question}><strong>Scenario {step + 1}:</strong> {simulation.question}</p>
        <ul style={styles.options}>
          {simulation.options.map((opt, index) => {
            let style = styles.option;
            if (checked) {
              if (index === simulation.correct) style = styles.correct;
              else if (index === selected) style = styles.wrong;
            } else if (selected === index) {
              style = styles.selected;
            }
            return (
              <li
                key={index}
                style={style}
                onClick={() => !checked && setSelected(index)}
              >
                {String.fromCharCode(65 + index)}. {opt}
              </li>
            );
          })}
        </ul>

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            style={{
              ...styles.button,
              backgroundColor: selected === null ? '#bdc3c7' : '#2980b9'
            }}
          >
            Check Answer
          </button>
        ) : (
          <>
            <p style={styles.feedback}>
              {isCorrect ? "✅ Correct!" : "❌ Wrong!"}
            </p>
            <p style={styles.explanation}><strong>Why:</strong> {simulation.explanation}</p>
            {step < simulations.length - 1 ? (
              <button onClick={handleNext} style={styles.button}>Next</button>
            ) : (
              <p style={styles.done}>🎉 You’ve completed all simulations!</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: "red",
    backgroundImage: "url('/images/bg2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: '80vh'
  },
  title: {
    fontSize: '32px',
    color: 'white'
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '20px',
    color: 'white'
  },
  card: {
    backgroundColor: 'rgb(187, 241, 243)',
    padding: '20px',
    marginLeft: '0',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    overflow: 'hidden'
  },
  question: {
    fontSize: '18px',
    marginBottom: '15px'
  },
  options: {
    listStyle: 'none',
    padding: 0
  },
  option: {
    backgroundColor: '#ecf0f1',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  selected: {
    backgroundColor: '#d0e8ff',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '2px solid #3498db'
  },
  correct: {
    backgroundColor: '#d4edda',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
    fontWeight: 'bold'
  },
  wrong: {
    backgroundColor: '#f8d7da',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px'
  },
  explanation: {
    marginTop: '15px',
    fontStyle: 'italic',
    color: '#2c3e50'
  },
  feedback: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#2c3e50'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  done: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#27ae60'
  }
};

export default Simulations;
