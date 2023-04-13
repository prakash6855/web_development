 // className property:----The className property of the Element interface gets and sets the value of the class attribute of the specified element.
// start.className = "letter-dark orange";

// classList property:----The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
// start.classList;


// classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
// remove() method:---The remove() method of the DOMTokenList interface removes the specified tokens from the list.

// start.classList.remove("orange");

// add() method:----The add() method of the DOMTokenList interface adds the given tokens to the list, omitting any that are already present.

// start.classList.add("orange");

 // toggle() method:----The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.

// start.classList.toggle("maroon");

// contains() method:----The contains() method of the DOMTokenList interface returns a boolean value — true if the underlying list contains the given token, otherwise false.

// start.classList.contains("yellow")

