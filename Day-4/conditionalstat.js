// Conditional Statement

// if-else

var age = 25;
console.log(age > 18)

// 1. Find user age is greatr than 18 or not
var age = 26;

if (age > 18) {
    console.log("You are eligible")
} else {
    console.log("You are not eligible")
}

// 2. Find user age is greater than 18 and less than 50 

var age = 30;

if (age > 18 && age < 50) {
    console.log("Your age is greater than 18 and less than 50")
} else {
    console.log("Your age might be less than 18 or more than 50")
}

// age>18 and age<80 allowed for voting
// if age<18 not allowed for viting
// if age>80 overage
// if age = 18 allowed

var age = 20;

if (age > 18 && age < 80) {
    console.log("Allowed for voting")
} else if (age < 18) {
    console.log("Under age")
} else if (age > 80) {
    console.log("Over Age")
} else {
    console.log("Allowed")
}

// Switch Statement

var marks = 80;

switch (marks) {
    case 20:
        console.log("You got 20 marks")
        break;
    case 50:
        console.log("You got 50 marks")
    case 80:
        console.log("You got 80 marks")
        break;
    default:
        console.log("Fail")
        break;

}

