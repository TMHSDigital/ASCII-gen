// app.js
window.onload = function() {
    // Get references to DOM elements
    const generateBtn = document.getElementById("generateBtn");
    const userInput = document.getElementById("userInput");
    const fontSelect = document.getElementById("fontSelect");
    const output = document.getElementById("output");
    const charCount = document.getElementById("charCount");
    const exportBtn = document.getElementById("exportBtn");
    const shareBtn = document.getElementById("shareBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check if all elements are found
    if (!generateBtn || !userInput || !fontSelect || !output || !charCount || !exportBtn || !shareBtn || !darkModeToggle) {
        console.error("One or more elements not found");
        return;
    }

    // Event listener for generating ASCII art
    generateBtn.addEventListener("click", function() {
        const text = userInput.value.trim();
        const font = fontSelect.value;
        
        if (!text) {
            output.innerText = "Please enter text to generate ASCII art.";
            return;
        }

        // Call function to generate ASCII art
        generateASCII(text, font, function(err, data) {
            if (err) {
                output.innerText = "Error: Could not generate ASCII";
                return;
            }
            output.innerText = data;
        });
    });

    // Event listener for exporting ASCII art as an image
    exportBtn.addEventListener("click", function() {
        if (output.innerText === "Generating ASCII art..." || output.innerText === "") {
            alert("Please generate the ASCII art before exporting.");
            return;
        }
        html2canvas(output).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'ascii-art.png';
            link.click();
        });
    });

    // Event listener for copying ASCII art to clipboard
    output.addEventListener("click", function() {
        const outputText = output.innerText;
        navigator.clipboard.writeText(outputText).then(() => {
            const originalText = output.innerText;
            output.innerText = "Copied!";
            setTimeout(() => {
                output.innerText = originalText;
            }, 1000);
        }).catch(err => {
            console.error("Failed to copy text:", err);
        });
    });

    // Toggle dark mode
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Update font preview on font change
    fontSelect.addEventListener("change", function() {
        const font = fontSelect.value;
        updateFontPreview(font, function(err, data) {
            if (!err) {
                document.getElementById("fontPreview").innerText = data;
            }
        });
    });

    // Update character count on input
    userInput.addEventListener("input", function() {
        const count = userInput.value.length;
        charCount.innerText = `${count}/100`;
    });

    // Share ASCII art using Web Share API
    shareBtn.addEventListener('click', function() {
        const outputText = output.innerText;
        if (navigator.share) {
            navigator.share({
                title: 'My ASCII Art',
                text: outputText,
            }).catch(console.error);
        } else {
            alert('Sharing not supported on this browser.');
        }
    });
};
