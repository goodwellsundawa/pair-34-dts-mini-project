import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoHtbRZfGBAjIPQDN1dX-jD6Y_W9t9kUA",
  authDomain: "dts2022-makfi.firebaseapp.com",
  projectId: "dts2022-makfi",
  storageBucket: "dts2022-makfi.appspot.com",
  messagingSenderId: "751989412481",
  appId: "1:751989412481:web:b60e1c7d5b567143fcb380",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAP = new GoogleAuthProvider();

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

const keluarDariApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAP);
    console.log("User yang berhasil login adalah", response.user);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
  loginWithGoogle,
};
