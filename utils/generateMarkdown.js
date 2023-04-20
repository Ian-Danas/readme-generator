// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length != 0) {
    return `![License Badge](https://img.shields.io/badge/License-${license}-green)`;
  }
  return ``;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length != 0) {
    return `[License](#License)${"\n"}`;
  }
  return ``;
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length != 0) {
    return `## License ${'<a id = "License"></a>'}
    This project is covered under the ${license} license`
  }
  return ``;
  }

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#Description)${"\n"}
[Installation](#Installation)${"\n"}
[Usage](#Usage)${"\n"}
[Contributing](#Contributing)${"\n"}
[Tests](#Tests)${"\n"}
${renderLicenseLink(data.license)}
[Questions](#Questions)${"\n"}

## Description ${'<a id = "Description"></a>'}
${data.desc}
## Installation ${'<a id = "Installation"></a>'}
${data.install}
## Usage ${'<a id = "Usage"></a>'}
${data.usage}
## Contributing ${'<a id = "Contributing"></a>'}
${data.contribute}
## Tests ${'<a id = "Tests"></a>'}
${data.tests}
${renderLicenseSection(data.license)}
## Questions ${'<a id = "Questions"></a>'}
if you have an additional questions about the project reach out to me at the github username or the email below
${"\n"} github: ${data.username}
${"\n"} Email: ${data.email}


`;
}

module.exports = generateMarkdown;
