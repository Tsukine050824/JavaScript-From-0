function generatePassword(length, LowerCase, UpperCase, Numbers, Symbols) {

    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = "";
    let password = "";

    allChars += LowerCase ? lowerCaseChars : "";
    allChars += UpperCase ? upperCaseChars : "";
    allChars += Numbers ? numberChars : "";
    allChars += Symbols ? symbolChars : "";

    if (length  <= 0) {
        return 'Password length must be greater than 0.';
    }
    if (allChars.length === 0) {
        return 'At least one character type must be selected.';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }




    return password;
}

const length = 12;
const LowerCase = true;
const UpperCase = true;
const Numbers = true;
const Symbols = true;

generatePassword(length, LowerCase, UpperCase, Numbers, Symbols);

console.log(`Your new password is: ${generatePassword(length, LowerCase, UpperCase, Numbers, Symbols)}`);