const inquirer = require("inquirer")
const mysql = require("mysql2")
const cTable = require("console.table")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jm367650@',
    database: 'employee_DB'
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as id" + connection.threadId)
    startPrompt();
});

function startPrompt() {
    const questions = [{
        type: 'list',
        name: 'choice',
        message: 'What would you like to view?',
        choices: [
                "View all employees",
                "View all employees by roles",
                "View all employess by departments",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
        ]
    }]
    inquirer.prompt(questions)
    .then(response => {
        switch(response.choice) {
            case "View all employees":
                viewAllEmployees();
                break;

            case "View all employees by roles":
                viewAllroles();
                break;
            
            case "View all employees by departments":
                viewAllDepartments();
                break;

            case "Add a department":
                addDepartment();
                break;

            case "Add a role":
                addRole();
                break;

            case "Add an employee":
                addEmployee();
                break;
            
            case "Update an employee role":
                updateEmployee();
                break;

        }
    })
}

