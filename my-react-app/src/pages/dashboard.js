import { useNavigate } from "react-router-dom";
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
