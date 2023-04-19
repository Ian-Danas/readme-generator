// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of your project',
        name: 'desc',
      },
      {
        type: 'input',
        message: 'What is the installation process for your project',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What is the usage for your project',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who are the contributors on the project',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'What the tests for your project',
        name: 'tests',
      },
      {
        name: "license",
        message: "What license do you want to add to your project",
        type: "list",
        choices: ['license1','license2','license']
     },

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
    };


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
