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

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "../config/firebase";

const auth = getAuth(app);

// Sign In
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Sign Up with Full Name
export const registerUser = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with full name
    await updateProfile(userCredential.user, {
      displayName: fullName,
    });

    await userCredential.user.reload();

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Logout Function
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Listen for Auth State Changes
export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
