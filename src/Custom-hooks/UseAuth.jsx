import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase.config";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState(null); // Initialize currentUser as null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Update currentUser state when authentication state changes
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
  }, []); // Empty dependency array to ensure the effect runs only once

  return currentUser;
};

export default UseAuth;
