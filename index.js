const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/markdown");

function getLicense(value){
    if (value === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
}

