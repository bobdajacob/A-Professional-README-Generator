// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'ISC') {
    return `![License](https://img.shields.io/badge/license-${license}-blue)`;
  } else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-${license}-yellow)`;
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-${license}_2.0-blue)`;
  }  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return renderLicenseBadge(license)
  } else {
    return '';
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# Title
${data.title}
${renderLicenseLink(data.license)}

# Description
${data.description}

# Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributing](#Contributing)
[License](#License)
[Tests](#Tests)
[Technologies](#Technologies)
[Questions](#Questions)

# Installation
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contributing}

# License
${data.license}


# Tests
${data.tests}

# Technologies Used
${data.technologies}

# Questions reach out to these informations:
${data.email}
${data.GitHub}

1. Clone the repository:
`}

export default generateMarkdown;
