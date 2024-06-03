// TODO: Include packages needed for this application
//import inquirer to prompt for user input
const inquirer = require("inquirer");
//import the file system module to handle file writing
const fs = require("fs");
// import function to generate markdown content
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// This array of objects holds the questions that will be presented to the user.
const questions = [
  {
    type: "input", //This input type represents a text field where users can input textual information.
    name: "title", // The name or key used to store the user's response
    message: "What is the title of your project?", // The message will be the prompt shown to the user.
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide the steps needed to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "credits",
    message:
      "If relevant, provide a list of your collaborators, with links to their GitHub profiles:",
  },
  {
    type: "list", // This type of input will be presented as a dropdown list.
    name: "license",
    message: "Choose a license for your project:",
    choices: ["Apache 2.0", "GNUv3.0", "MIT", "BSD 3-Clause", "No License"],
  },
  {
    type: "input",
    name: "contributions",
    message:
      "If you would like other developers to contribute, provide guidelines for how to do so:",
  },
  {
    type: "input",
    name: "tests",
    message:
      "If you wrote tests for your application, provide examples on how to run them:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    // Utilized fs.writeFile to write data to a file.
    if (err) {
      //Error checked
      console.error("Oops! Error writing file:", err); //Error logged
    } else {
      console.log("Successful generation of README.md!"); //Message logged if successful
    }
  });
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((answers) => {
    //Questions will be asked by inquirer
    const readmeContent = generateMarkdown(answers); // Utilize the answers to the questions to generate markdown content.
    writeToFile("README.md", readmeContent); // Write the generated content to the README.md file.
  });
}

// Initializes application
init();
