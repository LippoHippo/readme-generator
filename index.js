// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type   : "input",
        name   : "title",
        message: "What is the title of the project?"
    },
    {
        type    : "input",
        name    : "github",
        message : "What is the GitHub username? (Required)",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type   : "input",
        name   : "project",
        message: "What is the name of the project? (Required)",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type   : "input",
        name   : "description",
        message: "Describe what this application does",
        validate: describeInput => {
            if (describeInput) {
                return true;
            } else {
                console.log('Please summarize the application!');
                return false;
            }
        }
    },
    {
        type   : "input",
        name   : "",
        message: ""
    },
    {
        type   : "input",
        name   : "installation",
        message: "Explain the terminal npm procedure",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please explain how to install!');
                return false;
            }
        }
    },
    {
        type   : "input",
        name   : "usage",
        message: "Explain the purpose of this "
    },
    {
        type   : "input",
        name   : "license",
        message: ""
    },
    {
        type   : "input",
        name   : "contributing",
        message: ""
    },
    {
        type   : "input",
        name   : "questions",
        message: "If you have any questions about this repo please open an issue /or contact lippohippo at: anthonyw.byers@gmail.com"
    },
    {
        type: "confirm",
        name: "confrimAddProject",
        message: "Do you have any more questions to ask?",
        default: false
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('README created! Check README.md to see results!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
