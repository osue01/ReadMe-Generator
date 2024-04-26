const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateReadMe = require("./generator");

//array of questions that take in user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please title your project",
  },
  {
    type: "chekbox",
    name: "license",
    message: "Please select a license",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },

  {
    type: "input",
    name: "description",
    message: "Describe the function of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the install instructions for this app",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the use case for your project",
  },
  {
    type: "input",
    name: "contributions",
    message: "Name any contributors",
  },
  {
    type: "input",
    name: "test",
    message: "Declare testing instructions",
  },
];

//generate read me using fs.writeFile
function writeToFile(data) {
  return fs.writeFileSync("ReadMe.md", data);
}

function init() {
  console.log("initializing app");
  inquirer.prompt(questions).then((responses) => {
    const readMe = generateReadMe(responses);
    writeToFile(readMe);
  });
}
init();
