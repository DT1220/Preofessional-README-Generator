function Markdown(data){
    return `
    # Project Title
    ${data.title}
    ${data.getLicense}

    #Description
    ${data.description}

    #Contents
    [Installation] (#Installation)
    [Usage] (#Usage)
    [License]
    [Contributing]
    [Tests]
    [Contact Info]


    #Installation
    ${data.installation}

    #Usage 
    ${data.usage}


    # License
    ${data.license}


    #Credits
    ${data.credit}


    #Testing
    ${data.tests}

    #Contact Info
    ${data.username}
    ${data.email}
    `;
}

module.exports = markdown;