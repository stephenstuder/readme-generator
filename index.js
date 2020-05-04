const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown")
const generateLicense = require("./utils/generateLicense")

function ReadMeObject(title, description, installation, license, usage, contributing, tests, questions, username, avatar_url, email) {
    this.title = title,
        this.description = description,
        this.installation = installation,
        this.license = license,
        this.usage = usage,
        this.contributing = contributing,
        this.tests = tests,
        this.questions = questions,
        this.username = username,
        this.avatar_url = avatar_url,
        this.email = email
}

const questions = [
    {
        type: "input",
        message: "Title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "list",
        message: "License?",
        name: "license",
        choices: [
            "MIT",
            "GPLv2",
            "Apache",
            "GPLv3",
            "BSD3-clause",
            "Other",
        ]
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions:",
        name: "questions"
    },
    {
        type: "input",
        message: "Please enter your github username:",
        name: "username"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("Success!"));
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            userReadMeData = new ReadMeObject(response.title, response.description, response.installation, response.license, response.usage, response.contributing, response.tests, response.questions, response.username);
            const queryUrl = `https://api.github.com/users/${userReadMeData.username}`;
            axios
                .get(queryUrl)
                .then((response) => {
                    // Gets remaining peices from github
                    userReadMeData.avatar_url = response.data.avatar_url;
                    if (response.data.email === null) {
                        userReadMeData.email = "Email address not publicly available";
                    } else {
                        userReadMeData.email = response.data.email;
                    }
                    //Changes the license to a badge
                    userReadMeData.license = generateLicense(userReadMeData.license);
                    const markdownData = generateMarkdown(userReadMeData);
                    writeToFile("README.md", markdownData);
                }).catch((err) =>{
                    console.log(err);
                })

        }).catch((err) =>{
            console.log(err);
        })
}

init();
