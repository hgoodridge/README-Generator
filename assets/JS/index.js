const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your Read-Me?",
        name:"title"
    },

    {
        type:"input",
        message:"Add a description about your Read-Me.",
        name:"description"
    },

    {
        type:"list",
        message:"what type of liscense do you want",
        name:"license",
        choices:[
            "MIT",
            "ICS",
            "UNLICENSED",
        ]      
    },

    {
        type:"input",
        message:"information on how to use the repo",
        name:"usage"
    },

    {
        type:"input",
        message:"information on contributing to the repo",
        name:"contributing"
    },

    {
        type:"input",
        message:"What is your email",
        name:"email"
    },

//     {
// typ
//     }
])
.then(function(answers){
    fs.writeFile("new-Read-me.md",`${answers.title}
`, err => console.log(err))


    fs.appendFile("new-Read-me.md",` license ${answers.license}
`, err => console.log(err))

    fs.appendFile("new-Read-me.md",`# Description
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`${answers.description}
`, err => console.log(err))

    fs.appendFile("new-Read-me.md",` # Table of Contents
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`1. Installation
 2. Usage
 3. License
 4. Contributing
 5. Test
 6. Questions

    `, err => console.log(err))

        fs.appendFile("new-Read-me.md",`# usage
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`${answers.usage}cdS
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`# License
`, err => console.log(err))

fs.appendFile("new-Read-me.md",` This project is license dunder the ${answers.license} license
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`# Contributing
`, err => console.log(err))

fs.appendFile("new-Read-me.md",`${answers.contributing}
`, err => console.log(err))


})