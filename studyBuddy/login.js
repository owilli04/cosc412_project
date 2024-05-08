// importing necessary functions from SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
const submit = document.getElementById('submit-login');
const wrapper = document.querySelector('.wrapper');



// when user tries to log into their account
submit.addEventListener("click", function (event) {
    event.preventDefault()
    
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "dash.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + "\n" + errorCode)
        });
})
