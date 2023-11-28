const button = document.getElementById("submitButton");

button.addEventListener("click", function(event) {
    event.preventDefault();
    logText();
});

function logText() {
    const input = document.getElementById("myInput").value;
    console.log(input);
}