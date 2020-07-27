const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const chooseChoices = ["Intern", "Engineer", "Manager"];

const finalAns = [];

const choose = [{
    type: "list",
    name: "empChoice",
    choices: [chooseChoices[0], chooseChoices[1], chooseChoices[2]],
    message: "What type of employee?"
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
    type: "list",
    name: "addAnother",
    choices: ["Yes", "No"],
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
    type: "list",
    name: "addAnother",
    choices: ["Yes", "No"],
    message: "Add another employee?"
}
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
{
    type: "list",
    name: "addAnother",
    choices: ["Yes", "No"],
    message: "Add another employee?"
}
]

async function runPrompt (data) {
    inquirer.prompt(choose)
    .then(answer=> {
        if (answer.empChoice === chooseChoices[0]) {
           return inquirer.prompt(intQuest) 
           .then (answer => {
               if (answer.addAnother === "Yes") {
                   runPrompt() 
                   var intern = new Intern (answer.name, answer.id, answer.email, answer.school)
                   finalAns.push(intern)}
                   else if (answer.addAnother === "No") {return}
           })
        }
        else if (answer.empChoice === chooseChoices[1]) {
           return inquirer.prompt(engQuest)
           .then (answer => {
            if (answer.addAnother === "Yes") {
                runPrompt()
                var engineer = new Engineer (answer.name, answer.id, answer.email, answer.github)
                   finalAns.push(engineer)}
                   else if (answer.addAnother === "No") {return}
        })
        }
        else if (answer.empChoice === chooseChoices[2]) {
           return inquirer.prompt(manQuest)
           .then (answer => {
            if (answer.addAnother === "Yes") {
                runPrompt() 
                var manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber)
                   finalAns.push(manager)}
                   else if (answer.addAnother === "No") {return}
        })
        }
    }

    
    )}

    render (finalAns)

runPrompt ();





fs.writeFile(outputPath,finalAns, function (err) {
    
    if (err) throw err
   
});



fs.appendFile(outputPath,JSON.stringify(finalAns), function (err) {
    
    if (err) throw err
   
});

