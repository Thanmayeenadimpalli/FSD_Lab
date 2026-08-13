//here we are trying to export the class name college with the variables collegename and we are displaying it to the user..

export class College {
    collegeName: string = "SVECW";

    displayCollege() {
        console.log("College: " + this.collegeName);
    }
}