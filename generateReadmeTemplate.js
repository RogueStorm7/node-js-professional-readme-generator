function generateReadmeTemplate (data) {
    return `# Project Title
${data.Title}
## Description
${data.Description}
## Table of  
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [License](#license)
- [Tests](#tests)
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## License
${data.License} ![Badge](https://img.shields.io/badge/License-${data.License}-blueviolet)
## Tests
${data.Tests}
## Questions
**Email Address:** ${data.Email}
**Github Profile:** <www.github.com/${data.Username}/>
`
}

module.exports = generateReadmeTemplate