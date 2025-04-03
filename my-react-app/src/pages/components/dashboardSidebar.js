function DashboardSidebar({ activeSection, setActiveSection, handleLogout }) {
    return (
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
    );
  }
  
  export default DashboardSidebar;
  
  // CSS Styling
  const styles = `
    .sidebar {
      position: fixed;
      width: 250px;
      height: 100vh;
      top: 0;
      left: 0;
      background: #2c3e50;
      color: black;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .sidebar h2 {
      text-align: center;
      color: white;
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
      flex-grow: 1;
    }
    .sidebar li {
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      text-align: left;
      width: 100%;
      border-radius: 15px 0 0 15px;
    }
    .sidebar li:hover, .sidebar .active {
      background: rgb(10, 235, 197);
      font-weight: bold;
    }
    .logout-button {
      background: #e74c3c;
      padding: 10px;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      margin-bottom: 40px;
    }
    .logout-button:hover {
      background: #c0392b;
    }
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  