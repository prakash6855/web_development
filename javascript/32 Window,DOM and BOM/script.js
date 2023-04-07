// In the default browser JavaScript environment, window is a global that refers to the global object, which is also the window object.
// console.log(window);

// In JavaScript, console.log() is a method used for printing messages to the console.Document refers to the Document Object Model (DOM) which represents the HTML elements on a web page. By using console.log(document), we can print the entire DOM object to the console, which contains all the HTML elements of the current web page, along with their properties and methods.
// console.log(document);

// Document.body:---The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.
// console.log(document.body);

// document.body.style.background = "red"; is a line of JavaScript code that sets the background color of the body element of a web page to red.

// document refers to the Document Object Model (DOM) which represents the HTML elements on a web page.
//     body is a property of the document object that represents the <body> element of the web page.
//     style is a property of the body element that represents the style attribute of the element.
//     background is a CSS property that sets the background color of an element.
//     "red" is the value of the background property that we are setting.

// So when we execute the code document.body.style.background = "red";, the background color of the body element of the web page will be set to red. This is a simple example of how we can manipulate the style of HTML elements using JavaScript.
// document.body.style.background = "red";

// location.href = "https://www.google.com/"; is a line of JavaScript code that redirects the user to the Google homepage.

// Here's how it works:

//     location is a property of the window object in JavaScript that contains information about the current URL of the web page.
//     href is a property of the location object that contains the complete URL of the current web page, and can be set to a new URL to redirect the user to a different web page.
//     "https://www.google.com/" is the new URL that we are setting the location.href property to, which in this case is the URL for the Google homepage.

// So when we execute the code location.href = "https://www.google.com/";, the user's web browser will immediately navigate to the Google homepage.

// This is a simple example of how we can use JavaScript to redirect users to other web pages programmatically.

location.href = "https://www.google.com/";