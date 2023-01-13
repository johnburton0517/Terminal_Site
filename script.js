

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const prevCommand = document.getElementById("prev-command");

// gets the input from the user for the terminal
input.addEventListener("keyup", function(event) {
    // 13 is the keycode for the enter key
    if (event.keyCode === 13) {
        const text = input.value;
        
        // outputs the previous command
        // output.innerHTML += "user@terminal: " + text + "<br>";
        prevCommand.innerHTML = "user@terminal:~$ " + text + "<br>";

        // // if user inputs "help"
        if (text === "help" || text === "Help" || text === "HELP") {
            output.innterHTML += helpInput();
        }
        // if user inputs "clear"
        else if (text === "clear" || text === "Clear" || text === "CLEAR") {
            output.innerHTML = clearInput();
        }

        // // switch case for input
        // switch (text) {
        //     case help:
        //         helpInput()
        // }

        // Clear the input field
        input.value = "";  
    }
});

// if user inputs "help"
function helpInput() {
    return output.innerHTML += "about<br>contact<br>projects<br>skills<br>education<br>resume<br>clear<br>";
}

// if user inputs "clear"
function clearInput() {
    prevCommand.innerHTML = "";
    return output.innerHTML = "";
}
  