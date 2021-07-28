declare class Result {
    matric: number;
    inter: number;
    constructor(matric: number, inter: number);
}
export declare class Student extends Result {
    name: string;
    age: number;
    constructor(name: string, age: number, inter_marks: number, matric_marks: number);
}
export {};
