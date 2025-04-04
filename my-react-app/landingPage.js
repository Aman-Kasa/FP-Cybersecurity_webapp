import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

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
      color: "#998",
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
    section: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#222",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      color: "#998",
      marginBottom: "10px",
    },
    sectionText: {
      fontSize: "1rem",
      color: "#999",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to CyberShield</h1>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => navigate("/login")}
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

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.sectionText}>
          CyberShield is dedicated to providing top-notch cybersecurity solutions to protect your
          digital presence. Our mission is to ensure that your online activities remain secure and
          private in an ever-evolving cyber world.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.sectionText}>
          Have questions or need support? Reach out to us at: <br />
          <strong>Email:</strong> cybershield@gmail.com <br />
          <strong>Phone:</strong> +250780000000
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
