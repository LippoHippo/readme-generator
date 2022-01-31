// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   if (license === 'MIT') {

//   } else {

//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {
//   if (license === 'MIT') {

//   } else {

//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(data, license) {
//   if (!data.license) {
//     data.license = [];
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (!data) {
    data = [];
  }
  if (!data.questions) {
    data.questions = [];
  }
  if (!data.contributing) {
    data.contributing = [];
  }
  return `
  # ${data.title}

  [GitHub Project Link] (https://github.com/${data.github}/${data.project})

  # Description

  ${data.description}

  # Table Of Contents

    * [Installation](#installation) * [Usage](#usage)
    * [Contribution](#contribution) * [License](#license) 
    * [Questions](#questions)       * [How to Test](#test) 
  
  # Installation 

    We will be needing these requirements to run the application

     * ${data.installation}

  # Usage

    To use this app follow this short explanation, ${data.usage}

  # License

  The license: **${data.license}** was used for this project

  
  # How to Test

  This command will run a test in the terminal: ${data.tests}

  # Contribution

  ## Developers Contributed To This Project

   * ${data.contributing}

  # Questions

   - ${data.questions}

  ##### README Generator 2022 
`;
}

module.exports = generateMarkdown;
// module.exports = renderLicenseBadge;
// module.exports = renderLicenseLink;
// module.exports = renderLicenseSection;
