// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }
    getName() {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'EmpName',
                message: 'Employee Name?',
            }
        ]).then(answers =>{
            this.name = answers.name 
            this.getId
        })
    }
    getId(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpId',
                message: 'Employee ID #?',
            }
        ]).then(answers=>{
            this.id = answers.id
            this.getEmail
        })
    }
    getEmail(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpEmail',
                message: 'Employee Email?',
            }
        ]).then(answers=>{
            this.email = answers.email
            this.getRole
        })
    }
    getRole(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EmpRole',
                message: 'Employee Role?',
            }
        ]).then(answers=>{
            this.role = answers.role
        })
    }
}; 

module.exports = Employee