// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
    {
        type   :
        name   :
        message:
        
    },
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
