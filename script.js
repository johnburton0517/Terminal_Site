

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const welcome = document.getElementById("welcome");
const ascii = document.getElementById("ascii");

// array to store previous commands
let prevCommands = [];
let prevCommandsIndex = 0;

// variable for secret password
let isSecret = false;

// variable for if codes have been found
let foundCode = false;
let foundCode2 = false;


// gets the input from the user for the terminal
input.addEventListener("keyup", function(event) {
    // 13 is the keycode for the enter key
    if (event.keyCode === 13) {
        // store the previous command
        prevCommands.push(input.value);
        prevCommandsIndex = prevCommands.length;

        // get the input from the user
        let text = input.value.toLowerCase();

        // if isSecret is true, secret function is called
        if (isSecret) {
            secret(text);
            isSecret = false;

            // Clear the input field
            input.value = "";
            // change the secret class back to normal
            document.getElementById("command-line").className="command-line";
            return;
        }

        // // switch case for input
        switch (String(text)) {
            case "help":
                printPrevCommand(text);
                helpInput();
                break;

            case "clear":
                clearInput();
                break;

            case "about":
                printPrevCommand(text);
                aboutInput();
                break;

            case "education":
                printPrevCommand(text);
                educationInput()
                break;

            case "github":
                printPrevCommand(text);
                githubInput();
                break;

            case "linkedin":
                printPrevCommand(text);
                linkedinInput();
                break;

            case "projects":
                printPrevCommand(text);
                projectsInput();
                break;

            case "gui":
                printPrevCommand(text);
                guiInput();
                break;

            case "projects -gui":
                printPrevCommand(text);
                guiInput();
                break;

            case "projects -tic_tac_toe":
                printPrevCommand(text);
                TicTacToe();
                break;

            case "ls":
                printPrevCommand(text);
                ls();
                break;

            case "cat hidden.txt":
                printPrevCommand(text);
                output.innerHTML += `Secret Code: 14894`
                break;

            case "secret":
                printPrevCommand(text);

                // change the secret class to secret
                document.getElementById("command-line").className="secret";

                // set isSecret to true
                isSecret = true;

                break;

            default:
                //TODO: change color of help
                printPrevCommand(text);
                wrongInput();
        }

        // Clear the input field
        input.value = "";
    }
});


// if use presses up arrow, gets previous command
input.addEventListener("keydown", function(event) {
    // 38 is the keycode for the up arrow
    if (event.keyCode === 38) {
        // if there are no previous commands, do nothing
        if (prevCommandsIndex === 0) {
            return;
        }
        else {
            prevCommandsIndex--;
            input.value = prevCommands[prevCommandsIndex];
        }

        // move cursor to end of input
        input.selectionStart = input.selectionEnd = input.value.length;

    }
    // 40 is the keycode for the down arrow
    else if (event.keyCode === 40) {
        // if there are no previous commands, do nothing
        if (prevCommands[prevCommandsIndex + 1] === undefined) {
            input.value = "";
        }
        else {
            input.value = prevCommands[prevCommandsIndex + 1];
            prevCommandsIndex++;
        }

        // move cursor to end of input
        input.selectionStart = input.selectionEnd = input.value.length;
    }
});




// if user inputs "help"
function helpInput() {
    output.innerHTML += `<span style="color: rgb(7, 189, 165);">about<br>
                        projects<br>
                        education<br>
                        github<br>
                        linkedin<br>
                        gui<br>
                        secret<br>
                        help<br>
                        clear</span><br>`;
}

// if user inputs "about"
function aboutInput() {
    output.innerHTML += `My name is John Burton. I graduated from the University of South Carolina with a degree in Computer Engineering in 2022. I have a 
    passion for building and creating, and I love using my programming skills to bring ideas to life. Whether 
    I'm building a web application, creating a game, or automating a task, I'm always looking for new challenges 
    and opportunities to learn and grow.<br>`;
}

// if user inputs "education"
function educationInput() {
    output.innerHTML += `In May 2022, I graduated from the University of South Carolina with a degree in Computer Engineering.`;
}

// if the user input "github" 
function githubInput() {
    output.innerHTML += "Opening GitHub...";
    // open github in new tab
    window.open("https://github.com/johnburton0517");
}

// if the user input "linkden" 
function linkedinInput() {
    output.innerHTML += "Opening Linkedin...";
    // open linkedin in new tab
    window.open("https://linkedin.com/in/johnburton0517");
}

// if user inputs "projects"
function projectsInput() {
    output.innerHTML += `Type <span class='command-text'>'project -gui'</span> to open my GUI portfolio. <br>
                        Type <span class='command-text'>'projects -tic_tac_toe'</span> to play Tic Tac Toe. <br>`;
}

function guiInput() {
    output.innerHTML += "Opening GUI...";
    // open GUI in new tab
    window.open("https://johnburton0517.github.io/personal_portfolio/");
}

function TicTacToe() {
    output.innerHTML += "Opening Tic Tac Toe...";
    // open Tic Tac Toe in new tab
    window.open("https://johnburton0517.github.io/personal_portfolio/tictactoe.html");
}

function ls() {
    output.innerHTML += `hidden.txt<br>`;
}

function secret(password) {
    if (foundCode === false && foundCode2 === false) {
        if (password === "14894") {
            output.innerHTML += `You found one of the the secret codes.<br>
                                Keep looking for the other one.<br>`;
            foundCode = true;
        }
        else if (password === "mpqzwo") {
            output.innerHTML += `You found one of the the secret codes.<br>
                                Keep looking for the other one.<br>`;
            foundCode2 = true;
        }
        else {
            output.innerHTML += `Incorrect password. <br>`;
        }
    }
    else if (foundCode === true && foundCode2 === false) {
        if (password === "mpqzwo") {
            output.innerHTML += `You found the second secret code.<br>
                                You can now access the secret page.<br>`;
            foundCode2 = true;
        }
        else if (password === "14894") {
            output.innerHTML += `You already found this secret code.<br>
                                Keep looking for the other one.<br>`;
        }
        else {
            output.innerHTML += `Incorrect password. <br>`;
        }
    }
    else if (foundCode === false && foundCode2 === true) {
        if (password === "14894") {
            output.innerHTML += `You found the second secret code.<br>
                                You can now access the secret page.<br>`;
            foundCode = true;
        }
        else if (password === "mpqzwo") {
            output.innerHTML += `You already found this secret code.<br>
                                Keep looking for the other one.<br>`;
        }
        else {
            output.innerHTML += `Incorrect password. <br>`;
        }
    }
    if (foundCode === true && foundCode2 === true) {
        output.innerHTML += `Opening secret page...<br>`;
        // open secret page in new tab
        // window.open("https://johnburton0517.github.io/personal_portfolio/secret.html");
    }
}


// if user inputs "clear"
function clearInput() {
    welcome.innerHTML = "";
    output.innerHTML = "";
    ascii.innerHTML = "";
}

function wrongInput() {
    output.innerHTML += "Command not found. For a list of commands, type <span class='command-text'>'help'</span><br>";
}

function printPrevCommand(text) {
    output.innerHTML += `<h3 class='prev-command'>user@terminal:~$ ${text}<br></h3>`;
}

// console log one of the passwords on load of the page
console.log("Secret Code: mpqzwo");