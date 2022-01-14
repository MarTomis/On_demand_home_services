import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVE-uuZQ9AaqoxhSLMlorh1Y3Th9LoqyM",
    authDomain: "on-demand-home-services-2870b.firebaseapp.com",
    projectId: "on-demand-home-services-2870b",
    storageBucket: "on-demand-home-services-2870b.appspot.com",
    messagingSenderId: "783380927109",
    appId: "1:783380927109:web:bf89574f6ee0eb5e18cfec"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;