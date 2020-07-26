const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const chooseChoices = ["Intern", "Engineer", "Manager"]

const choose = [{
    type: "list",
    name: "empChoice",
    // choices: [chooseChoices[0], chooseChoices[1], chooseChoices[2]],
    choices: ["Intern", "Engineer", "Manager"],
    message: "What type of employee?"
}]

const empQuest = [{
    type: "input",
    name: "role",
    message: "What is the employee's role?",
}]

const intQuest = [
{
    type: "input",
    name: "name",
    message: "What is the intern's name?"
},
{
    type: "input",
    name: "id",
    message: "What is the intern's ID?"
},
{
    type: "input",
    name: "email",
    message: "What is the intern's email?"
},
{
    type: "input",
    name: "school",
    message: "What is the intern's school?",
},
{
    type: "confirm",
    name: "addAnother",
    message: "Add another employee?"
}
]

const engQuest = [
{
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
},
{
    type: "input",
    name: "id",
    message: "What is the engineer's ID?",
},
{
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
},
{
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
},
{
    type: "confirm",
    name: "addAnother",
    message: "Add another employee?",
},
]

const manQuest = [
{
    type: "input",
    name: "name",
    message: "What is the manager's name?",
},
{
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
},
{
    type: "input",
    name: "email",
    message: "What is the manager's email?",
},
{
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?"
},
]

async function runPrompt () {
    inquirer.prompt(choose)
    .then(answer=> {
        if (chooseChoices[0]) {
           return inquirer.prompt(intQuest) 
        }
        else if (chooseChoices[1]) {
           return inquirer.prompt(engQuest)
        }
        else if (chooseChoices[2]) {
           return inquirer.prompt(manQuest)
        }
        
    }
    )}



runPrompt ();


const finalAns = [];