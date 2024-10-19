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

    document.getElementById("output").addEventListener("click", function() {
        const outputText = document.getElementById("output").innerText;
        navigator.clipboard.writeText(outputText).then(() => {
            alert("ASCII art copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });

    // Add dark mode toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

    // Update font preview
    function updateFontPreview() {
        let fontSelect = document.getElementById("fontSelect").value;
        figlet.text('Preview', { font: fontSelect }, function(err, data) {
            if (!err) {
                document.getElementById("fontPreview").innerText = data;
            }
        });
    }
};
