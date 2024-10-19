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
            const originalText = document.getElementById("output").innerText;
            document.getElementById("output").innerText = "Copied!";
            setTimeout(() => {
                document.getElementById("output").innerText = originalText;
            }, 1000);
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

    // Update character count
    document.getElementById("userInput").addEventListener("input", function() {
        const charCount = document.getElementById("userInput").value.length;
        document.getElementById("charCount").innerText = `${charCount}/100`;
    });

    // Export ASCII art as an image
    document.getElementById("exportBtn").addEventListener("click", function() {
        html2canvas(document.getElementById("output")).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'ascii-art.png';
            link.click();
        });
    });

    // Add a share button
    const shareBtn = document.createElement('button');
    shareBtn.innerText = 'Share';
    document.body.appendChild(shareBtn);

    shareBtn.addEventListener('click', function() {
        const outputText = document.getElementById("output").innerText;
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
