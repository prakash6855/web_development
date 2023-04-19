console.log(document.cookie);
document.cookie = "country = myanmar"
document.cookie = "zip = 123456" 
document.cookie = "country = india"
console.log(document.cookie);
let key = prompt("Enter your key");
let value = prompt("Enter the value");
// encodeURIComponent():---------------The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two surrogate characters). Compared to encodeURI(), this function encodes more characters, including those that are part of the URI syntax
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// decodeURIComponent():-----------The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent() or by a similar routine.

// decodeURIComponent("key/value") use it in console to get the decoded value 
console.log(document.cookie);