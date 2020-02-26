const markdownGenerator = (data) => {
    // console.log(data)
return `
# ${data.title}  

![license badge](https://img.shields.io/badge/license-${data.license}-red)  

## Table of contents
* [1. Installation](#installation)
* [2. Usage](#usage)
* [3. License](#license)
* [4. Contributing](#contributing)
* [5. Test](#test)
* [6. Questions](#questions)


## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage  

${data.usage}

## License

This project is licensed under the ${data.license} license.


# Contributing  
  

${data.contributing}  

# Test  
\`\`\`
${data.test}  
\`\`\`

# Questions



<img src="${data.avatar_url}" style="border-radius: 16px" width="30" />


If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.webmail}.

`

}
module.exports = markdownGenerator