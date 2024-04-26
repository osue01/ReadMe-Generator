const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateReadMe = require("./generator");

//array of questions that take in user input
const questions = [
  {
    type: "input",
    input: "title",
    message: "Please title your project",
  },
  {
    type: "chekbox",
    input: "license",
    message: "Please select a license",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },


  {
    type: "input",
    input: "description",
    message: "Describe the function of your project",
  },
  {
    type: "input",
    input: "installation",
    message: "What are the install instructions for this app",
  },
  {
    type: "input",
    input: "usage",
    message: "Describe the use case for your project",
  },
  {
    type: "input",
    input: "contributions",
    message: "Name any contributors",
  },
  {
    type: "input",
    input: "test",
    message: "Declare testing instructions",
  },
];

//todo write function to generate read me using fs.writeFile
//idk how this works :(
function writeToFile('ReadMe.md', data) {
  return fs.writeFileSync(?????)
}

//todo initiallize app
