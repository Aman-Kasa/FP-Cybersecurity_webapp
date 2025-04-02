// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import LandingPage from "./pages/landingPage";
// import Login from "./pages/login";
// import Register from "./pages/registration";
// import Dashboard from "./pages/dashboard";
// import { checkAuthState } from "./FIREBASE/components/auth";

// const AppRoutes = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = checkAuthState(setUser);
//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
//         <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
//         <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/registration";
import Dashboard from "./pages/dashboard";
import { checkAuthState } from "./FIREBASE/components/auth";
import { getAuth, updateProfile } from "firebase/auth"; // Import these

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = checkAuthState(async (authUser) => {
      if (authUser) {
        // Ensure displayName is set and reload user if necessary
        const auth = getAuth();
        await auth.currentUser?.reload(); // Refresh user data
        setUser({ ...auth.currentUser }); // Set updated user data
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

