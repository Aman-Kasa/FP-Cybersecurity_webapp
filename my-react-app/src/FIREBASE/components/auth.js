import React, { useState } from "react";
import { auth, GoogleProvider } from "../config/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to register new users
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered successfully");
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                console.log("Email already in use. Signing in instead...");
                signIn();
            } else {
                console.error(err.message);
            }
        }
    };

    // Function to log in existing users
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in successfully");
        } catch (err) {
            console.error(err.message);
        }
    };

    // Google Sign-In
    const signInWithGoogle = async () => {
        try {
            GoogleProvider.setCustomParameters({ prompt: "select_account" }); // Ensure pop-up works
            await signInWithPopup(auth, GoogleProvider);
            console.log("Google sign-in successful");
        } catch (err) {
            console.error(err.message);
        }
    };

    // Logout
    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}>Sign Up</button>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};
