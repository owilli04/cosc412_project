import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, child, push, update, query} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDdeo9U1XVB-uSIIlJh0q2Rfhja_lJXVV8",
    authDomain: "study-buddy-7c5ef.firebaseapp.com",
    projectId: "study-buddy-7c5ef",
    storageBucket: "study-buddy-7c5ef.appspot.com",
    messagingSenderId: "452982202209",
    appId: "1:452982202209:web:1d7bdce643e6d0e67c2f20",
    databaseURL: "https://study-buddy-7c5ef-default-rtdb.firebaseio.com/",
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// need to test these:
function initUser(email) { // need to call in register.js somehow to add user when they register
  db.push(email);
}
function addCourse(email, course){
    const user = ref(db, email);
    user.push(course);
}

function getCourses(email){
    return db.query(ref(db, email));
}
