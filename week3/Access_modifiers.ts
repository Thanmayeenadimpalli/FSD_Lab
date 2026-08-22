// Class Implementation with Access Modifiers

class OnlineCourse {

    // PUBLIC: Accessible from anywhere
    public studentName: string;

    // PRIVATE: Accessible only inside this class
    private courseFee: number;
    private enrollmentCode: number;

    // PROTECTED: Accessible in this class and child classes
    protected rewardPoints: number = 0;

    // Constructor
    constructor(name: string, fee: number, code: number) {
        this.studentName = name;
        this.courseFee = fee;
        this.enrollmentCode = code;
    }

    // PUBLIC METHOD
    public purchaseCourse(amount: number, enteredCode: number): void {
        if (this.verifyCode(enteredCode)) {
            if (amount >= this.courseFee) {
                console.log("Course Purchased Successfully!");
                console.log(`Student Name : ${this.studentName}`);
                console.log(`Amount Paid : ₹${amount}`);
            } else {
                console.log("Insufficient Payment.");
            }
        } else {
            console.log("Invalid Enrollment Code.");
        }
    }

    // PRIVATE METHOD
    private verifyCode(code: number): boolean {
        return this.enrollmentCode === code;
    }
}

// Child Class
class PremiumCourse extends OnlineCourse {
    public addRewardPoints(): void {
        this.rewardPoints += 200;
        console.log(`Reward Points Added Successfully.`);
        console.log(`Current Reward Points : ${this.rewardPoints}`);
        //Not Allowed
        // this.courseFee = 5000;
    }
}


// Creating Object
const student = new OnlineCourse(
    "Thanmayee",
    5000,
    2468
);

// Accessing Public Property
console.log("Student Name :", student.studentName);

// Calling Public Method
student.purchaseCourse(5000, 2468);

//  These are not allowed because they are private

// console.log(student.courseFee);
// student.verifyCode(2468);

// Child Class Object
const premiumStudent = new PremiumCourse(
    "Ananya",
    7000,
    9876
);

// Accessing Protected Member through Child Class
premiumStudent.addRewardPoints();