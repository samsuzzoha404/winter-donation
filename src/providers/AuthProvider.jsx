import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  validatePassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts";
import auth, { googleProvider } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleLogOut = () => {
    return signOut(auth);
  };
  const handleUpdateProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const handlePasswordValidation = (passwordFromUser) => {
    return validatePassword(auth, passwordFromUser);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signInWithEmail,
    handleSignInWithGoogle,
    handleLogOut,
    loading,
    handleUpdateProfile,
    handleResetPassword,
    handlePasswordValidation,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
