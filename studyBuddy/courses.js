//DOMContentLoaded: When the document is loaded, the dropdown is populated and the previously saved courses are loaded from localStorage.
//addCourse: Adds the selected course from the dropdown to the list and calls saveCourses to update localStorage.
//deleteSelectedClasses: Deletes the selected courses from the list and updates localStorage accordingly.
//saveCourses: Saves the current list of courses to localStorage by creating an array of course names and storing it as a JSON string.
//loadCourses: Loads courses from localStorage and populates the list. This function is called when the page loads to maintain the list state across sessions.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
const database = firebase.database();


document.addEventListener('DOMContentLoaded', function() {
    const courses = ['COSC 101', 'COSC 412', 'MATH 203', 'PHYS 301'];
    const courseDropdown = document.getElementById('courseDropdown');
    courses.forEach(course => {
        let option = new Option(course, course);
        courseDropdown.add(option);
    });

    // DOMContentLoaded: Load saved courses from localStorage
    loadCourses();
});

function addCourse() {
    const courseDropdown = document.getElementById('courseDropdown');
    const selectedCourse = courseDropdown.value;
    const list = document.getElementById('myCoursesList');
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'course';
    checkbox.value = selectedCourse;
    listItem.appendChild(checkbox);
    listItem.append(` ${selectedCourse}`);
    list.appendChild(listItem);

    //addsCourse:  Save the updated list to localStorage
    saveCourses();
}

function deleteSelectedClasses() {
    const list = document.getElementById('myCoursesList');
    const checkboxes = list.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        list.removeChild(checkbox.parentNode);
    });
    
    // Save the updated list to localStorage
    saveCourses();
}

function saveCourses() {
    const courses = [];
    document.querySelectorAll('#myCoursesList li').forEach(li => {
        courses.push(li.textContent.trim());
    });
    localStorage.setItem('courses', JSON.stringify(courses));
}

function loadCourses() {
    const savedCourses = JSON.parse(localStorage.getItem('courses'));
    if (savedCourses) {
        const list = document.getElementById('myCoursesList');
        savedCourses.forEach(course => {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'course';
            checkbox.value = course;
            listItem.appendChild(checkbox);
            listItem.append(` ${course}`);
            list.appendChild(listItem);
        });
    }
}

function sendEmail() {
    const recipient = document.getElementById('recipientEmail').value;
    const body = document.getElementById('emailBody').value;

    // Use Fetch API to send this data to your backend
    fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient, body })
    })
    .then(response => response.json())
    .then(data => {
        alert('Email sent successfully!');
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}
