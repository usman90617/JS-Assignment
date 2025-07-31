// Question 1
var char = prompt("Enter a character:");

var code = char.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a number.");
} else {
    if (code >= 65 && code <= 90) {
        alert("It is an uppercase letter.");
    } else {
        if (code >= 97 && code <= 122) {
            alert("It is a lowercase letter.");
        } else {
            alert("It is not a number or letter.");
        }
    }
}
// Question 2
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");

// Convert strings to numbers
num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    alert(num1 + " is larger.");
} else {
    if (num2 > num1) {
        alert(num2 + " is larger.");
    } else {
        alert("Both numbers are equal.");
    }
}

// Question 3
var num = prompt("Enter a number:");
num = Number(num);

if (num > 0) {
    alert("The number is positive.");
} else {
    if (num < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}

// Question 4
var ch = prompt("Enter one character:");

// Convert to lowercase to simplify checks
ch = ch.toLowerCase();

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    alert("true (It is a vowel)");
} else {
    alert("false (Not a vowel)");
}

// Question 5
// Step 1: Store correct password
var correctPassword = "mypassword123";

// Step 2: Ask user to enter password
var userPassword = prompt("Please enter your password:");

// Step 3: Validate password
if (userPassword === null || userPassword === "") {
    // User did not enter anything
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    // Passwords match
    alert("Correct! The password you entered matches the original password");
} else {
    // Passwords do not match
    alert("Incorrect password");
}

// Question 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);  // Output: Good day

// Question 7
var time = prompt("Enter time in 24-hour format (e.g., 1900):");
time = parseInt(time);

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid time entered.");
}

