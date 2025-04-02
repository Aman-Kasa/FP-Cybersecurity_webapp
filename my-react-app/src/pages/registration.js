import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../FIREBASE/components/auth";
import { countries } from "./countries"; // Importing full country list

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [isHovering, setIsHovering] = useState(false); // Button hover state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await registerUser(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // Styles
  const styles = {
    pageContainer: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url('/images/bg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    formContainer: {
      maxWidth: "400px",
      padding: "40px",
      background: "rgba(236, 243, 243, 0.3)",
      boxShadow: "10px 10px 20px rgba(9, 10, 9, 0.62)",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      transition: "border 0.3s ease",
    },
    inputHover: {
      border: "2px solid #00bfff", // Light blue border on hover
    },
    select: {
      width: "105%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      transition: "border 0.3s ease",
      appearance: "none",
    },
    button: {
      background: isHovering ? "rgb(131, 224, 224)" : " #00bfff",
      color: "black",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
      width: "50%",
      transition: "background 0.3s ease",
    },
    genderContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2>Register</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={styles.input}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            style={styles.select}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.input}
            onMouseOver={(e) => (e.target.style.border = styles.inputHover.border)}
            onMouseOut={(e) => (e.target.style.border = styles.input.border)}
          />
          <div style={styles.genderContainer}>
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </div>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
