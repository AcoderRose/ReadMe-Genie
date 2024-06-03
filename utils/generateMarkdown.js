// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Verifies that the selected license is not 'None'.
  if (license !== "None") {
    // Generates a Markdown string for the license badge image.
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  // If no license is selected, returns an empty string.
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    // Returns a Markdown string containing a link to the license section.
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    // If no license is selected, returns an empty string.
    return `## License\n\nThis project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generates a Markdown string based on the provided data.
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
For any questions, please contact me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// Exports the generateMarkdown function for use in other files.
module.exports = generateMarkdown;
