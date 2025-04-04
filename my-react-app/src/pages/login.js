import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../FIREBASE/components/auth";

const LoginPopup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setShowPopup(false); // Close popup on successful login
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {/* Button to show the popup */}
      <button onClick={() => setShowPopup(true)} style={styles.loginButton}>Login</button>

      {/* Popup Modal */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={styles.input}
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={styles.input}
              />
              <button type="submit" style={styles.submitButton}>Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate("/register")} style={styles.registerButton}>Register</button></p>
            <button onClick={() => setShowPopup(false)} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  loginButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
    textAlign: "center",
    width: "300px",
  },
  closeButton: {
    marginTop: "10px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  submitButton: {
    marginTop: "10px",
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
  },
  registerButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default LoginPopup;
