// Write a js program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess is correct, greater or lesser than the original number.(100-(no. of guesses)) is a score of the user. The program is expected to terminate once the number is guessed. Number should be in between 1-100.

let no = Math.floor((Math.random() * 100) + 1); // Gnerates number in between 1 to 100
let chances = 0; //Initialising value of chances to guess the number
let guess; //Variable to store the no to the input from user to be guessed
console.log("Enter into a number guessing game in which user guess a number which will be matched with the computer generated number,if both matches then he/she will declare win\n");
guess = prompt("Enter the value");
guess++; // To increment the number of chances taken

do {
    guess = Number.parseInt(guess);
    if (guess > no) {
        console.log("Provided input is greater");
        guess = prompt("Retry");
        guess = Number.parseInt(guess);
        ++chances; // To increment the number of chances taken
        continue;
    } else if (guess < no) {
        console.log("Provided input is smaller");
        guess = prompt("Retry");
        guess = Number.parseInt(guess);
        ++chances; //To increment the number of chances taken
        continue;
    }
} while (guess != no);  //break the loop if number entered is = to the number generated
let score = 100 - chances; //Score scored by user
console.log("\n Congo You guessed the right number", no + " and your final score is", score);