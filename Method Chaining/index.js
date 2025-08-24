let username = prompt("Enter your username: ");


// No method chaining

username = username.trim();
let letters = username.charAt(0);
letters = letters.toUpperCase();

let extraLetters = username.slice(1);
extraLetters = extraLetters.toLowerCase();

username = letters + extraLetters;

console.log(username);

// With method chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);