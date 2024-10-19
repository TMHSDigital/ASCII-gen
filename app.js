// app.js
window.onload = function() {
    document.getElementById("generateBtn").addEventListener("click", function() {
        let userInput = document.getElementById("userInput").value;
        let fontSelect = document.getElementById("fontSelect").value;
        
        console.log("User Input:", userInput);
        console.log("Selected Font:", fontSelect);

        document.getElementById("output").innerText = "Generating ASCII art...";

        figlet.text(userInput, { font: fontSelect }, function(err, data) {
            if (err) {
                document.getElementById("output").innerText = "Error: Could not generate ASCII";
                console.error(err);
                return;
            }
            document.getElementById("output").innerText = data;
        });
    });
};
