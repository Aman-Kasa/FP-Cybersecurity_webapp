import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../FIREBASE/components/auth";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setShowPopup(false); // Close popup on success
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.message);
    }
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      backgroundColor: "#f0f8ff",
      minHeight: "100vh",
      fontFamily: "'Roboto', sans-serif",
      backgroundImage: "url('/images/bg2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    title: {
      fontSize: "2.5rem",
      color: "white",
      marginBottom: "20px",
    },
    button: {
      margin: "10px",
      padding: "15px 30px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#003366",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#00509e",
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
      zIndex: 1000,
    },
    popup: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
      textAlign: "center",
      width: "300px",
    },
    input: {
      width: "100%",
      padding: "8px",
      margin: "5px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to CyberShield</h1>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => setShowPopup(true)}
      >
        Login
      </button>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => navigate("/register")}
      >
        Register
      </button>

      {/* About Us Section */}
      <div>
        <h2 style={textStyle}>About Us</h2>
        <p style={textStyle}>
          CyberShield is dedicated to providing top-notch cybersecurity solutions to protect your digital presence.
          Our mission is to ensure that your online activities remain secure and private in an ever-evolving cyber world.
        </p>
      </div>

      {/* Contact Us Section */}
      <div>
        <h2 style={textStyle} >Contact Us</h2>
        <p style={textStyle}>
          Have questions or need support? Reach out to us at:
          <br />
          <strong>Email:</strong> cybershield@gmail.com
          <br />
          <strong>Phone:</strong> +250780000000
        </p>
      </div>

      {/* Login Popup */}
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
const textStyle = {
  color: "#fff", // Ensure all text is visible
};

export default LandingPage;

