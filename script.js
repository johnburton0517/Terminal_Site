

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const prevCommand = document.getElementById("prev-command");
const welcome = document.getElementById("welcome");


// gets the input from the user for the terminal
input.addEventListener("keyup", function(event) {
    // 13 is the keycode for the enter key
    if (event.keyCode === 13) {
        const text = input.value.toLowerCase();
        
        // outputs the previous command
        // prevCommand.innerHTML = "user@terminal:~$ " + text + "<br>";

        // printPrevCommand(text)

        // // switch case for input
        switch (String(text)) {
            case "help":
                printPrevCommand(text)
                helpInput();
                break;

            case "clear":
                clearInput();
                break;

            case "about":
                aboutInput();
                break;

            default:
                //TODO: change color of help
                wrongInput();
        }

        // Clear the input field
        input.value = "";
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
    prevCommand.innerHTML = "";
    welcome.innerHTML = "";
    output.innerHTML = "";
}

function wrongInput() {
    output.innerHTML += "Command not found. For a list of commands, type 'help'<br>";
}

function printPrevCommand(text) {
    var command = document.createElement("h3");
    command.className = ".prev-command";

    command.innerHTML = "user@terminal:~$ " + text + "<br>";
    command.appendChild(command);
    var terminalOutput = document.getElementById("terminal-output");
    terminalOutput.insertBefore(command, terminalOutput);
}