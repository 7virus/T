
// Import the required modules
const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Function to obfuscate a JavaScript file
function obfuscateFile(inputFilePath, outputFilePath) {
    try {
        // Read the original JavaScript file
        const inputCode = fs.readFileSync(inputFilePath, 'utf-8');

        // Obfuscate the code using JavaScriptObfuscator
        const obfuscationResult = JavaScriptObfuscator.obfuscate(inputCode, {
            compact: true,
            controlFlowFlattening: true,
            deadCodeInjection: true,
            debugProtection: true,
            disableConsoleOutput: true,
            stringArray: true,
            stringArrayEncoding: ['base64'], // Encode strings in Base64
            stringArrayThreshold: 0.75,
        });

        // Write the obfuscated code to the output file
        fs.writeFileSync(outputFilePath, obfuscationResult.getObfuscatedCode());

        console.log(`File successfully obfuscated and saved to ${outputFilePath}`);
    } catch (error) {
        console.error('Error during obfuscation:', error.message);
    }
}

// Example Usage:
// Replace 'input.js' with the path to the file you want to obfuscate
// Replace 'output.js' with the desired output file path
const inputFilePath = path.resolve(__dirname, 'input.js'); // Input file
const outputFilePath = path.resolve(__dirname, 'output.js'); // Output file

obfuscateFile(inputFilePath, outputFilePath);
