

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const welcome = document.getElementById("welcome");

// array to store previous commands
let prevCommands = [];
let prevCommandsIndex = 0;


// gets the input from the user for the terminal
input.addEventListener("keyup", function(event) {
    // 13 is the keycode for the enter key
    if (event.keyCode === 13) {
        // store the previous command
        prevCommands.push(input.value);
        prevCommandsIndex = prevCommands.length;

        // get the input from the user
        const text = input.value.toLowerCase();

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
            input.value = prevCommands[prevCommandsIndex - 1];
            prevCommandsIndex--;
        }

        // move cursor to end of input
        input.selectionStart = input.selectionEnd = input.value.length;
    }
    // 40 is the keycode for the down arrow
    else if (event.keyCode === 40) {
        // if there are no previous commands, do nothing
        if (prevCommands[prevCommandsIndex + 1] === undefined) {
            return;
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
    output.innerHTML += "about<br>contact<br>projects<br>skills<br>education<br>resume<br>clear<br>";
}

// TODO
// if user inputs "about"
function aboutInput() {
    output.innerHTML += "about";
}

// if user inputs "clear"
function clearInput() {
    welcome.innerHTML = "";
    output.innerHTML = "";
}

function wrongInput() {
    output.innerHTML += "Command not found. For a list of commands, type <span class='command-text'>'help'</span><br>";
}

function printPrevCommand(text) {
    output.innerHTML += `<h3 class='prev-command'>user@terminal:~$ ${text}<br></h3>`;
}