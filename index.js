const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*&\"'()@!:;,.?=+";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById('password-output');

console.log(passwordOutput);

function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Please select criteria ! ^^");
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
        console.log(password);
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copied :p";

    setTimeout(() => {
        generateButton.textContent = "Generate a password"

    }, 3000);
}

generateButton.addEventListener("click", generatePassword);