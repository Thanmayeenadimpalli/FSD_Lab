// ReadOnly & Static Properties

class Library {

    // 1. STATIC: Shared among all objects
    public static readonly libraryName: string = "SVECW Central Library";
    public static totalBooksIssued: number = 0;

    //  READONLY: Assigned only once
    public readonly bookId: string;
    public studentName: string;

    // Constructor
    constructor(name: string, id: string) {
        this.studentName = name;
        this.bookId = id;
        Library.totalBooksIssued++;
    }

    // STATIC METHOD
    public static libraryRules(): void {
        console.log(`Welcome to ${this.libraryName}`);
        console.log("Books must be returned within 15 days.");
    }

    // Instance Method
    public displayBookDetails(): void {
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
const student1 = new Library(
    "Thanmayee",
    "BOOK101"
);

const student2 = new Library(
    "sangeetha",
    "BOOK102"
);

// Display Details
student1.displayBookDetails();
student2.displayBookDetails();
console.log(student1.bookId);


console.log(
    `Total Books Issued : ${Library.totalBooksIssued}`
);