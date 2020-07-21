// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');



class Employee {
    constructor (name, id, email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'EmpName',
                message: 'Employee Name?',
            }
        ])
        .then(
            
            answers =>{
            this.name = answers.name
            return this.name
            
           
        }) 
    }

    getName(){
        return this.name
    }

    getId() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpId',
                message: 'Employee ID #?',
            }
        ]).then(answers=>{
            this.id = answers.id
            return this.id
            
            
        })
    }

    getId(){
        return this.id
    }

    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpEmail',
                message: 'Employee Email?',
            }
        ]).then(answers=>{
            this.email = answers.email
            return this.email
        })
    }

    getEmail(){
        return this.email
    }

    getRole() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpRole',
                message: 'Employee Role?',
            }
        ]).then(answers=>{
            this.role = answers.role
            return this.role
           
        })
    }

    getRole(){
        return this.role
    }

    getRole(){
        return "Employee"
    }
}



module.exports = Employee