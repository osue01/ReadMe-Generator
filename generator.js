//use template literals to build the format of our readMe
//title
function generateReadMe(data) {
  return `
# Title
${data.title}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)


## Description
<a name="Description"></a>
${data.description}

## Installation
<a name="Installation"></a>
${data.installation}

## Usage
<a name="Usage"></a>
${data.usage}

## Contributions
<a name="Contributions"></a>
${data.contributions}

## Tests
<a name="Test"></a>
${data.test}
`;
}

module.exports = generateReadMe;
