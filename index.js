// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input

const questions = [
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
      type: "checkbox",
      message: "What technologies are you going to use?",
      choices: ["HTML", "JavaScript", "CSS", "Other"],
      name: "technologies"
    },
    {
      type: "list",
      message: "Pick a license for your project:",
      name: "license",
      choices: ["MIT", "ISC", "Apache"],
    },
    {
      type: "input",
      message: "Enter GitHub username",
      name: "GitHub",
    },
    {
      type: "input",
      message: "Enter email address",
      name: "email",
    },
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Generated README successfully!')
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    const generatedREADME = generateMarkdown(data)
    writeToFile('generatedREADME.md', generatedREADME);
  });
}

// Function call to initialize app
init();
