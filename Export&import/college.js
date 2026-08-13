"use strict";
//here we are trying to export the class name college with the variables collegename and we are displaying it to the user..
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
class College {
    collegeName = "SVECW";
    displayCollege() {
        console.log("College: " + this.collegeName);
    }
}
exports.College = College;
