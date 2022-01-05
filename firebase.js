// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// import {}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr4nj3UbPk3kT16y8D2bX3TDW3-DDYHWo",
  authDomain: "vulcan-rn.firebaseapp.com",
  projectId: "vulcan-rn",
  storageBucket: "vulcan-rn.appspot.com",
  messagingSenderId: "272589607534",
  appId: "1:272589607534:web:0829d108c94b28d2d2cc7f",
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// export { auth };

export default app;
