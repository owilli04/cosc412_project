import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, child, push, update, query} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const db = ref(database);
const email = localStorage.getItem("userID");

// need to test these:
export function initUser(user) { 
  ref(db,"users/").push(user);
}
export function addCourseFB(course){
    const classes = ref(db, "classes/");
    const users = ref(db, "users/");
    ref(classes,course).push(email);
    ref(users, email).push(course);
}

export function getCourses(){
    const users = ref(db, "users/");
    return db.query(ref(users, email));
}

export function deleteCourse(course){
    const classes = ref(db, "classes/");
    const users = ref(db, "users/");
    ref(classes,course).remove(email);
    ref(users, email).remove(course);
}
