//DOMContentLoaded: When the document is loaded, the dropdown is populated and the previously saved courses are loaded from localStorage.
//addCourse: Adds the selected course from the dropdown to the list and calls saveCourses to update localStorage.
//deleteSelectedClasses: Deletes the selected courses from the list and updates localStorage accordingly.
//saveCourses: Saves the current list of courses to localStorage by creating an array of course names and storing it as a JSON string.
//loadCourses: Loads courses from localStorage and populates the list. This function is called when the page loads to maintain the list state across sessions.

// parallel database functionality imported here
import {addCourseFB, getCourses, deleteCourse} from './coursesFB.js';

document.addEventListener('DOMContentLoaded', function() {
    const courses = ['CIS 377', 'COSC 336', 'COSC 350', 'COSC 412', 'COSC 435', 'COSC 436',];
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

    alert(5)
    // database update:
    addCourseFB(selectedCourse);
    
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
