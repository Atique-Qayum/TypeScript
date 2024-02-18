// create a simple calculator using inquire
// First step is go to terminal and run the following command
// tsc --init
// npm i inquirer
// npm i types/inquirer -D
// npm init -y


import inquirer, { Answers } from "inquirer"

let answer = await inquirer.prompt  ([{
    type: "number",
    name: "num1",
    message: "Enter first number: "
},
{
    type: "number",
    name: "num2",
    message: "Enter second number: "
},
{
    type: "list",
    name: "operator",
    message: "Select operator: ",
    choices: ["+", "-", "*", "/"]
}])

let result: number
switch (answer.operator) {
    case "+":
        result = answer.num1 + answer.num2
        console.log(result)
        break;
        case "-":
        result = answer.num1 - answer.num2
        console.log(result)
        break;
        case "/":
        result = answer.num1 / answer.num2
        console.log(result)
        break;
        case "*":
        result = answer.num1 * answer.num2
        console.log(result)
        break;
}