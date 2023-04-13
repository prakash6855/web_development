//  getAttribute() method:------The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
/*
let uid = document.getElementById("uid");
let a = uid.getAttribute("class");
console.log(a);
*/
// hasAttribute() method:-----The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.
/*
console.log(uid.hasAttribute("class"));
console.log(uid.hasAttribute("style"));
*/
// setAttribute() method:------Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
/*
uid.setAttribute("hidden", "true");
uid.setAttribute("class", "true peter");
*/
// removeAttribute() method:-----The Element method removeAttribute() removes the attribute with the specified name from the element.
// uid.removeAttribute("class");

// attributes property:-----The Element.attributes property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.
// console.log(uid.attributes);

// data-*  :------ The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
console.log(uid.dataset);
console.log(uid.dataset.game);
console.log(uid.dataset.player);