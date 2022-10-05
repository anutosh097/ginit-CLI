import inquirer from "inquirer";
// import files from "./files"

const promptFromUser = {
    askGithubCredentials: () => {
    const questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter your GitHub username or email address:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your username or e - mail address.';
                }
            }
        },
        {
            name: 'password',
            type: 'password',
            message: 'Enter your password:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your password.';
                }
            }
        }
    ];
    return inquirer.prompt(questions);
}
}

export default promptFromUser