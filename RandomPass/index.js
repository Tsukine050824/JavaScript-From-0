// Random Password Generator
// Generates a random password based on specified criteria

// Function to generate a random password
function generatePassword(length, LowerCase, UpperCase, Numbers, Symbols) {

    // Character sets
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Build the character pool based on user preferences
    let allChars = "";
    let password = "";

    // Ensure at least one character type is selected
    allChars += LowerCase ? lowerCaseChars : "";
    allChars += UpperCase ? upperCaseChars : "";
    allChars += Numbers ? numberChars : "";
    allChars += Symbols ? symbolChars : "";
    
    // Validate input
    if (length  <= 0) {
        return 'Password length must be greater than 0.';
    }
    if (allChars.length === 0) {
        return 'At least one character type must be selected.';
    }

    // Generate the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }




    return password;
}


// Example usage:
const length = 12;
const LowerCase = true;
const UpperCase = true;
const Numbers = true;
const Symbols = true;


// Call the function and log the result
generatePassword(length, LowerCase, UpperCase, Numbers, Symbols);

// Print the generated password to the console
console.log(`Your new password is: ${generatePassword(length, LowerCase, UpperCase, Numbers, Symbols)}`);