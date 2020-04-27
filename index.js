const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

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
        let readMeData = response;
        const queryUrl = `https://api.github.com/users/${response.username}`;
        axios
        .get(queryUrl)
        .then((response) => {
          // handle success
          const avatar_url = response.data.avatar_url;
          const email = response.data.email;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
        
        //actually write to a file here that we create on the fly. 
        //fs.writeFile("README.md", )

      });
