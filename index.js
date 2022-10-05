import chalk from "chalk" //dependency for colouring the console and prevent it being boring and monochrome
import clear from "clear"
import figlet from "figlet"  //dependency for making the banner which is application name in ASCII format,creates ASCII art from text
import files from "./lib/files.js"

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout:
            'full' })            
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
    process.exit();
}else{
    console.log(chalk.green('Not a git repository! Initialise with git'));
}
