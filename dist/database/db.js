"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var PouchDB = require('pouchdb');
exports.db = new PouchDB('students_db');
