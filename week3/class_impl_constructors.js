"use strict";
// implementing the class with the constructors
class LibraryMember {
    // Properties
    memberName;
    membershipFee;
    membershipType;
    validityYears;
    // Constructor Implementation
    constructor(name, fee, type, years) {
        this.memberName = name;
        this.membershipFee = fee;
        // Default values
        this.membershipType = type ?? "Regular"; // ?? this means if the value on the left is null then use the right value
        this.validityYears = years ?? 1; //?? called as nullish coalescing operator
    }
    // Method to calculate total membership cost
    calculateTotalCost() {
        const serviceCharge = this.membershipFee * 0.05;
        return this.membershipFee + serviceCharge;
    }
    // Display member details
    displayDetails() {
        console.log(" Membership Details \n");
        console.log(`Member Name : ${this.memberName}`);
        console.log(`Membership Fee : ₹${this.membershipFee}`);
        console.log(`Membership Type : ${this.membershipType}`);
        console.log(`Validity : ${this.validityYears} year(s)`);
        console.log(`Total Cost : ₹${this.calculateTotalCost()}`);
        console.log("\n");
    }
}
// Scenario 1 - Default Membership
const regularMember = new LibraryMember("Rahul", 2000);
regularMember.displayDetails();
// Scenario 2 - Premium Membership
const premiumMember = new LibraryMember("Sneha", 5000, "Premium", 3);
premiumMember.displayDetails();
// Updating property after object creation
premiumMember.membershipFee = 6000;
console.log(`Updated Membership Cost for ${premiumMember.memberName}: ₹${premiumMember.calculateTotalCost()}`);
