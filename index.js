const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const markdownGenerator = require('./Utils/markdownGenerator.js')
inquirer.prompt([
    
    {
        type:"input",
        message:"What is your GitHub user name?",
        name:"github"
    },
    {
        type:"input",
        message:"What is your email?",
        name:"webmail"
    },

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
        message:"what type of liscense do you want?",
        name:"license",
        choices:[
            "MIT",
            "ICS",
            "UNLICENSED",
        ]      
    },

    {
        type:"input",
        message:"information on how to use the repo?",
        name:"usage"
    },

    {
        type:"input",
        message:"information on contributing to the repo?",
        name:"contributing"
    },

    

    {
        type:"input",
        message:"What command does the user need to install the dependacies?",
        name:"installation"
    },

    {
        type:"input",
        message:"What command to run the test",
        name:"test"
    }

])
.then(function(answers){
    axios.get(`https://api.github.com/users/${answers.github}`)
    .then(function({data}){

        fs.writeFile("new-Read-me.md",markdownGenerator({...answers, ...data}), err=>{
            if (err) throw err;
            console.log('...saving ')
        })
        
        
        
//         const data =`   
//         # ${answers.title}
        
//         ## Description
// ${answers.description}

// ## Table of contents
// 1. Instillation
// 2. Usage
// 3. Liscense
// 4. Contributing
// 5. Test
// 6. Questions

// ## Instilation
//     ${answers.installation}
    
// ## Usage
// ${answers.usage}

// ## License
// This project is licensed under the ${answers.license} license.

// ## Contributing
// ${answers.contributing}

// ## Test
// To run test, run the following command:

//     ${answers.test}

// ## Questions
// ![profile picture of ${answers.github}] (${response.avatar_url})

// if you have any questions about the repo, open an issue or contact ${response.url} directly at ${answers.email}.
// `

// fs.writeFile("new-Read-me.md", data, err => err ? console.log(err) : null)
// })
})

})
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

