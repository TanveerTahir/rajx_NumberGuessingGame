#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user will input for guessing number
// 3) comuter user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
// const randomNumber =  13;
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number"
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulation! you guessed a right number.");
}
else {
    console.log("your guess was Wrong.");
}
