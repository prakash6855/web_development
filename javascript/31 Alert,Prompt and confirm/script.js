// Window.alert():----window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
alert("Enter the value of c");
// let c = prompt("Enter here");
// Window.prompt():-----window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
let c = prompt("Enter here", "444");//444 in a string here works as a default value
// document.write():-----The document.write() method writes a string of text to a document stream opened by document.open().
// document.write(c);
c = Number.parseInt(c);
alert("You entered c of type " + (typeof c));
// Window.confirm():----window.confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
let write = confirm("Allow me to write to the page")
if(write){
  document.write(c);
}else{
  document.write("Please allow to rewrite");
}
