

  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");

input.addEventListener("keyup", function(event) {
    // 13 is the keycode for the enter key
    if (event.keyCode === 13) {
        const text = input.value;
        
        // outputs the user input with a new line
        output.innerHTML += text + "<br>";

        // if user inputs "help"
        if (text === "help" || text === "Help" || text === "HELP") {
            output.innterHTML += helpInput();
        }
        // if user inputs "clear"
        else if (text === "clear" || text === "Clear" || text === "CLEAR") {
            output.innerHTML = clearInput();
        }

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
    return output.innerHTML = "";
}
  