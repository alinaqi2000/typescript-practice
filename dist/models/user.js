"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Result = /** @class */ (function () {
    function Result(matric, inter) {
        if (matric === void 0) { matric = 0; }
        if (inter === void 0) { inter = 0; }
        this.matric = matric;
        this.inter = inter;
    }
    return Result;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // _id: number
    function Student(name, age) {
        if (name === void 0) { name = ""; }
        if (age === void 0) { age = 0; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
        // this._id = Math.floor(Math.random() * 11111)
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.setMatric = function (matric) {
        this.matric = matric;
    };
    Student.prototype.setInter = function (inter) {
        this.inter = inter;
    };
    return Student;
}(Result));
exports.Student = Student;
