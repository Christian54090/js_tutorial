// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  return string.toLowerCase() === reverse(string.toLowerCase());
}

// Returns the username and domain from email
function emailParts(string) {
  let str = string.toLowerCase().split("@");
  return `username: ${str[0]}, domain: ${str[1]}`;
}
