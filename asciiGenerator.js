// asciiGenerator.js

function generateASCII(text, font, callback) {
    figlet.text(text, { font: font }, function(err, data) {
        if (err) {
            console.error("Error generating ASCII:", err);
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

function updateFontPreview(font, callback) {
    figlet.text('Preview', { font: font }, function(err, data) {
        if (err) {
            console.error("Error updating font preview:", err);
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}
