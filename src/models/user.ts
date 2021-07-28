class Result {
    constructor(public matric = 0, public inter = 0) { }
}
export class Student extends Result {
    // _id: number
    constructor(public name = "", public age = 0) {
        super()
        // this._id = Math.floor(Math.random() * 11111)
    }
    public setName(name: string) {
        this.name = name;
    }
    public setAge(age: number) {
        this.age = age;
    }
    public setMatric(matric: number) {
        this.matric = matric;
    }
    public setInter(inter: number) {
        this.inter = inter;
    }
}