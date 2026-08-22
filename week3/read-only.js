"use strict";
// ReadOnly & Static Properties
class Library {
    // 1. STATIC: Shared among all objects
    static libraryName = "SVECW Central Library";
    static totalBooksIssued = 0;
    //  READONLY: Assigned only once
    bookId;
    studentName;
    // Constructor
    constructor(name, id) {
        this.studentName = name;
        this.bookId = id;
        Library.totalBooksIssued++;
    }
    // STATIC METHOD
    static libraryRules() {
        console.log(`Welcome to ${this.libraryName}`);
        console.log("Books must be returned within 15 days.");
    }
    // Instance Method
    displayBookDetails() {
        console.log(" Book Details ");
        console.log(`Student Name : ${this.studentName}`);
        console.log(`Book ID      : ${this.bookId}`);
    }
}
// Execution 
// Accessing STATIC members
console.log(Library.libraryName);
Library.libraryRules();
// Creating Objects
const student1 = new Library("Thanmayee", "BOOK101");
const student2 = new Library("sangeetha", "BOOK102");
// Display Details
student1.displayBookDetails();
student2.displayBookDetails();
console.log(student1.bookId);
console.log(`Total Books Issued : ${Library.totalBooksIssued}`);
