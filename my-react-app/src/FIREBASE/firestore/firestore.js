import { db } from "../config/firebase";
import { collection, doc, setDoc, getDocs, getDoc, updateDoc } from "firebase/firestore";
console.log("Firestore DB Instance:", db); 

// Save quiz results
export async function saveQuizResult(userId, quizLevel, score) {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      await updateDoc(userRef, {
        [`quizResults.${quizLevel}`]: score,
      });
    } else {
      await setDoc(userRef, {
        quizResults: {
          [quizLevel]: score,
        },
      });
    }
  } catch (error) {
    console.error("Error saving quiz result:", error);
  }
}

// Fetch user quiz results
export async function getUserQuizResults(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data().quizResults || {} : {};
  } catch (error) {
    console.error("Error fetching user results:", error);
    return {};
  }
}

export const getUserProgress = async (userId) => {
  try {
    const userRef = doc(db, "userProgress", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      return { completedLessons: 0, totalLessons: 3 }; // Default values
    }
  } catch (error) {
    console.error("Error fetching user progress:", error);
    return { completedLessons: 0, totalLessons: 3 }; // Default fallback
  }
};
// ✅ Fetch user certificates
export const getUserCertificates = async (userId) => {
  const querySnapshot = await getDocs(collection(db, "certificates"));
  return querySnapshot.docs.map((doc) => doc.data());
};

// ✅ Update user progress
export async function updateUserProgress(userId, level) {
  try {
    const userRef = doc(db, "userProgress", userId);
    await setDoc(userRef, { currentLevel: level }, { merge: true });
    console.log(`Progress updated to level: ${level}`);
  } catch (error) {
    console.error("Error updating progress:", error);
  }
}
