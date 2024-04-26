
//add in License tings

//use template literals to build the format of our readMe
//title
function generateReadMe(data) {
  return `
# Title
${data.title}

## Table of Contents 
* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [Contributions] (#Contributions)
* [Tests] (#Tests)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.test}
`;
}

module.exports = generateReadMe;