const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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


inquirer
.prompt([
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
      type: "input",
      message: "License?",
      name: "license"
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
    },
  ])
  .then(function(response) {
    //Use github name to gather image and email
    let userReadMeData = new ReadMeObject(response.title, response.description, response.description, response.installation, response.license, response.usage, response.contributing, response.contributing, response.tests, response.questions, response.username);    //actually write to a file here that we create on the fly. 
    //fs.writeFile("README.md", )
    const queryUrl = `https://api.github.com/users/${userReadMeData.username}`;
    axios
    .get(queryUrl)
    .then((response) => {
      // handle success
      userReadMeData.avatar_url = response.data.avatar_url;
      userReadMeData.email = response.data.email;
      const UserReadMe = `# ${userReadMeData.title}\n\n## description\n${userReadMeData.description}\n\n## installation\n${userReadMeData.installation}\n\n## license\n${userReadMeData.license}\n\n## usage\n${userReadMeData.usage}\n\n## contributing\n${userReadMeData.contributing}\n\n## tests\n${userReadMeData.tests}\n\n## questions\n${userReadMeData.questions}\n\n## avatar_url\n${userReadMeData.avatar_url}\n\n## email\n${userReadMeData.email}`;
      fs.writeFile("README.md", UserReadMe, err => err ? console.log(err) : console.log("Success!"));
    })
    .catch((error) => {
      console.log("Whoops, looks like the github call failed")
      console.log(error); 
    });
  })
  .catch((error) => {
    console.log("Whoops, looks like something failed")
      // handle error
      console.log(error); 
    });