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

    // query github with axios
    

    const data = `
    # ${answers.title}

    ## Description
    ${answers.description}
    `

    fs.writeFile("new-Read-me.md", data, err => err ? console.log(err) : null)
    
//     fs.writeFile("new-Read-me.md",`${answers.title}
// `, err => err ? console.log(err) : null)


//     fs.appendFile("new-Read-me.md",` license ${answers.license}
// `, err => err ? console.log(err) : null)

//     fs.appendFile("new-Read-me.md",`# Description
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`${answers.description}
// `, err => err ? console.log(err) : null)

//     fs.appendFile("new-Read-me.md",` # Table of Contents
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`1. Installation
//  2. Usage
//  3. License
//  4. Contributing
//  5. Test
//  6. Questions

//     `, err => err ? console.log(err) : null)

//         fs.appendFile("new-Read-me.md",`# usage
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`${answers.usage}cdS
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`# License
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",` This project is license dunder the ${answers.license} license
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`# Contributing
// `, err => err ? console.log(err) : null)

// fs.appendFile("new-Read-me.md",`${answers.contributing}
// `, err => err ? console.log(err) : null)


})