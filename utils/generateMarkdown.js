// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (!data.questions) {
    data.questions = [];
  }
  return `
  # ${data.title}

  [GitHub Project Link] (https://github.com/${data.github}/${data.project})

  # Description

  ${data.description}

  #Table Of Contents

    * [Installation](#installation) * [Usage](#usage)
    * [Contribution](#contribution) * [License](#license) 
    * [Questions](#questions)       * [Tests](#test) 
  
  # Installation 

    We will be needing these requirements to run the application
     * ${data.installation}

  # Usage

    To use this app follow this short explanation, ${data.usage}

  ${data.license}
  ${data.contributing}
  ${data.tests}
  # Questions
  
   - ${data.questions}

  ###### README Generator 2022 
`;
}

module.exports = generateMarkdown;
