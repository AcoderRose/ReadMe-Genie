// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps needed to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'If relevant, provide a list of your collaborators, with links to their GitHub profiles:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNUv3.0', 'MIT', 'BSD 3-Clause', 'No License'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has features, list them here:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If you would like other developers to contribute, provide guidelines for how to do so:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you wrote tests for your application, provide examples on how to run them:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Oops! Error writing file:", err);
    } else {
      console.log("Successful generation of README.md!");
    }
  });
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Initializes application
init();
