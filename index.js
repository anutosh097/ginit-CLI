import chalk from "chalk" //dependency for colouring the console and prevent it being boring and monochrome
import clear from "clear"
import figlet from "figlet"  //dependency for making the banner which is application name in ASCII format,creates ASCII art from text
import inquirer from "inquirer" //prompts the user fot github username and password for authentication
import promptFromUser from "./lib/inquirer.js"
import files from "./lib/files.js"

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
} else {
    console.log(chalk.green('Not a git repository! Initialise with git'));
}

const run = async () => {
    const credentials = await
        promptFromUser.askGithubCredentials();
    console.log(credentials);
}
run();
