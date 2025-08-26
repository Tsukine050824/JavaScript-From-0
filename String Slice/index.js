// String Slice
// Extract username and domain from email




const email = "123456@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(domain);