// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = ''){
    return ''
  } 
 return `This project is covered under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
1.[Description](#Description)${'\n'}
2.[Installation](#Installation)${'\n'}
3.[Usage](#Usage)${'\n'}
4.[Contributing](#Contributing)${'\n'}
5.[Tests](#Tests)${'\n'}
6.[License](#License)${'\n'}
7.[Questions](#Questions)${'\n'}

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
## License ${'<a id = "License"></a>'}
${renderLicenseSection(data.license)}
## Questions ${'<a id = "Questions"></a>'}
if you have an additional questions about the project reach out to me at the github username or the email below
${'\n'} github: ${data.username}
${'\n'} Email: ${data.email}


`;
}

module.exports = generateMarkdown;
