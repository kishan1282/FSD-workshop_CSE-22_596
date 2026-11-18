const fs = require('fs');

const file = 'attendance.txt';

// Add student
function addStudent(name) {
    fs.appendFileSync(file, name + '\n');
    console.log("Student added successfully");
}

// Show all students
function showStudents() {
    if (!fs.existsSync(file)) {
        console.log("No attendance record found");
        return;
    }

    console.log(fs.readFileSync(file, 'utf8'));
}

// Update student name
function updateStudent(oldName, newName) {
    if (!fs.existsSync(file)) return;

    let data = fs.readFileSync(file, 'utf8');
    let names = data.split('\n');

    let index = names.indexOf(oldName);

    if (index !== -1) {
        names[index] = newName;
        fs.writeFileSync(file, names.filter(n => n).join('\n') + '\n');
        console.log("Name updated");
    } else {
        console.log("Student not found");
    }
}

// Delete student
function deleteStudent(name) {
    if (!fs.existsSync(file)) return;

    let data = fs.readFileSync(file, 'utf8');
    let names = data.split('\n').filter(n => n !== name && n !== '');

    fs.writeFileSync(file, names.join('\n'));
    console.log("Student deleted");
}

// Function calls
addStudent("Rahul");
addStudent("Aman");

showStudents();

updateStudent("Rahul", "Rohit");

deleteStudent("Aman");

showStudents();