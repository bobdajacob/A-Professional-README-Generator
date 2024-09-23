// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt ([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description for your project",
      name: "description",
    },
    {
      type: "input",
      message: "Enter the installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter the contribution guidelines",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter tests instructions",
      name: "tests",
    },
    {
      type: "list",
      message: "Pick a license for your project:",
      name: "license",
      choices: ["MIT", "GPL", "Apache", "BSD"],
    },
    {
      type: "input",
      message: "Enter GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "Enter email address",
      name: "email",
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
