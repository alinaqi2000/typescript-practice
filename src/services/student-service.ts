import { Student } from "../models/user";

export class StudentService {
    document = "students"
    constructor(public db: any) { }
    async save(student: Student) {
        return this.db.get(this.document)
            .then((doc: any) => {
                const students: Student[] = doc.students
                students.push(student);

                return this.db.put({ _id: this.document, _rev: doc._rev, students })
            }).catch((error: any) => {
                const students: Student[] = []
                students.push(student);

                return this.db.put({ _id: this.document, students })
            })
    }
    async get(): Promise<Student[]> {
        const students: Student[] = await this.db.get(this.document).then((doc: any) => doc.students)
        return students
    }
    async delete(index: number) {
        const doc: any = await this.db.get(this.document)
        await doc.students.splice(index, 1)
        return await this.db.put({ _id: this.document, _rev: doc._rev, students: doc.students })
    }
}