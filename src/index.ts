import { db } from "./database/db";
import { Student } from "./models/user";
import { StudentService } from "./services/student-service";
const prompt = require("prompt-sync")();
const stSer = new StudentService(db);
async function addStudents() {
    const student = new Student()
    let input = ""
    input = await prompt("Enter student name: ");
    student.setName(input)
    input = await prompt("Enter student age: ");
    student.setAge(+input)
    input = await prompt("Enter student matric marks: ");
    student.setMatric(+input)
    input = await prompt("Enter student inter marks: ");
    student.setInter(+input)

    await stSer.save(student)
    console.log("Student added successfully.");

}
async function deleteStudents() {
    const students: Student[] = await stSer.get()
    if (students.length) {
        console.log("Students List:");
        students.map((s, i) => {
            console.log("Student Name:" + s.name + ", Id: " + (+i + 1))
        })
        let id = await prompt("Enter the student id you want to delete: ")
        await stSer.delete(+id - 1)
        console.log("Student deleted successfully.");
    } else {
        console.log("No students in the databse.");
    }
}
async function listStudents() {
    const students: Student[] = await stSer.get()
    if (students.length) {
        console.log("Students List:");
        students.map((s, i) => {
            console.log("Student Name:" + s.name + ", Id: " + (+i + 1))
        })

    } else {
        console.log("No students in the databse.");
    }
}
async function performFunctin(func: any) {
    let isAdding = true
    do {
        await func()
        let input = prompt("Repeat operation? (y/n) ")
        if (input == 'n') {
            isAdding = false
        }
    } while (isAdding);
}
async function main() {
    let entering = true
    do {
        console.log("Please select the mode ");

        console.log("1. Add Student");
        console.log("2. Delete Student");
        console.log("3. Print Students List");
        let mode = await prompt()
        switch (mode) {
            case "1":
                await performFunctin(addStudents)
                break;
            case "2":
                await performFunctin(deleteStudents)
                break;
            case "3":
                await listStudents()
                break;
            default:
                break;
        }
        let input = await prompt("Want to perform another operation? (y/n) ")
        if (input == 'n') {
            entering = false
        }
    } while (entering);

}

main()