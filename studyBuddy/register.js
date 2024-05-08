// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"; // needed? not in vid
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdeo9U1XVB-uSIIlJh0q2Rfhja_lJXVV8",
    authDomain: "study-buddy-7c5ef.firebaseapp.com",
    projectId: "study-buddy-7c5ef",
    storageBucket: "study-buddy-7c5ef.appspot.com",
    messagingSenderId: "452982202209",
    appId: "1:452982202209:web:1d7bdce643e6d0e67c2f20"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getting input
const submit = document.getElementById('submitReg');
const wrapper = document.querySelector('.wrapper');


submit.addEventListener("click", function(event){ // )?
    event.preventDefault()
    const email = document.getElementById('email').nodeValue; // value in vid, not listed in IDE, try next
    const password = document.getElementById('password').nodeValue;
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Creating account...")
        //wrapper.classList.remove('active'); // added from other js file
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("ERROR")
        // ..
      }); 
})
