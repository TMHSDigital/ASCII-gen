// app.js
window.onload = function() {
    const generateBtn = document.getElementById("generateBtn");
    const userInput = document.getElementById("userInput");
    const fontSelect = document.getElementById("fontSelect");
    const output = document.getElementById("output");
    const charCount = document.getElementById("charCount");
    const exportBtn = document.getElementById("exportBtn");
    const shareBtn = document.getElementById("shareBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    generateBtn.addEventListener("click", function() {
        const text = userInput.value;
        const font = fontSelect.value;
        
        console.log("User Input:", text);
        console.log("Selected Font:", font);

        output.innerText = "Generating ASCII art...";

        figlet.text(text, { font: font }, function(err, data) {
            if (err) {
                output.innerText = "Error: Could not generate ASCII";
                console.error(err);
                return;
            }
            output.innerText = data;
        });
    });

    output.addEventListener("click", function() {
        const outputText = output.innerText;
        navigator.clipboard.writeText(outputText).then(() => {
            const originalText = output.innerText;
            output.innerText = "Copied!";
            setTimeout(() => {
                output.innerText = originalText;
            }, 1000);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    darkModeToggle.addEventListener("click", toggleDarkMode);

    function updateFontPreview() {
        const font = fontSelect.value;
        figlet.text('Preview', { font: font }, function(err, data) {
            if (!err) {
                document.getElementById("fontPreview").innerText = data;
            }
        });
    }

    userInput.addEventListener("input", function() {
        const count = userInput.value.length;
        charCount.innerText = `${count}/100`;
    });

    exportBtn.addEventListener("click", function() {
        html2canvas(output).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'ascii-art.png';
            link.click();
        });
    });

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
