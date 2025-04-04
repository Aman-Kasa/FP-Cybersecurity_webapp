// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { app } from "../config/firebase";

// const auth = getAuth(app);

// // Sign In
// export const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Sign Up
// export const registerUser = async (email, password,) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Logout Function
// export const logoutUser = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     throw error;
//   }
// };

// // Listen for Auth State Changes
// export const checkAuthState = (callback) => {
//   return onAuthStateChanged(auth, (user) => {
//     callback(user);
//   });
// };

// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
// import { app } from "../config/firebase";

// const auth = getAuth(app);

// // Sign In
// export const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Sign Up with Full Name
// export const registerUser = async (email, password, fullName) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//     // Update profile with full name
//     await updateProfile(userCredential.user, {
//       displayName: fullName,
//     });

//     await userCredential.user.reload();

//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Logout Function
// export const logoutUser = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     throw error;
//   }
// };

// // Listen for Auth State Changes
// export const checkAuthState = (callback) => {
//   return onAuthStateChanged(auth, (user) => {
//     callback(user);
//   });
// };
// import { 
//   getAuth, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   signOut, 
//   onAuthStateChanged, 
//   updateProfile 
// } from "firebase/auth";
// import { app } from "../config/firebase";

// const auth = getAuth(app);

// // Sign In
// export const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Sign Up with Full Name
// export const registerUser = async (email, password, fullName) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//     // Update profile with full name
//     await updateProfile(userCredential.user, { displayName: fullName });

//     // Ensure the profile update reflects immediately
//     await userCredential.user.reload();
//     const updatedUser = auth.currentUser; // Get the updated user

//     return updatedUser; // Return updated user
//   } catch (error) {
//     throw error;
//   }
// };

// // Logout Function
// export const logoutUser = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     throw error;
//   }
// };

// // Listen for Auth State Changes
// export const checkAuthState = (callback) => {
//   return onAuthStateChanged(auth, (user) => {
//     try {
//       callback(user);
//     } catch (error) {
//       console.error("Error in auth state change:", error);
//     }
//   });
// };


import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile 
} from "firebase/auth";
import { app } from "../config/firebase";

const auth = getAuth(app);

// ✅ Listen for Auth State Changes (Fix for `auth.currentUser` being null)
onAuthStateChanged(auth, (user) => {
  console.log("Auth State Changed:", user); // This will log user when auth state updates
});

// ✅ Sign In Function
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user); // Debugging log
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// ✅ Sign Up Function (with Full Name)
export const registerUser = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Ensure the user is properly initialized
    await user.reload();

    // Update profile with full name
    await updateProfile(user, { displayName: fullName });

    console.log("Updated User:", user); // Debugging log

    return user;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};

// ✅ Logout Function
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Logout Error:", error.message);
    throw error;
  }
};

// ✅ Listen for Authentication State Changes (Callback function)
export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    try {
      console.log("Auth State Changed:", user);
      callback(user);
    } catch (error) {
      console.error("Error in Auth State Change:", error.message);
    }
  });
};
