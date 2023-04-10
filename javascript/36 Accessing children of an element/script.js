console.log(document.body.firstChild);// The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children. 
console.log(document.body.lastChild);// The read-only lastChild property of the Node interface returns the last child of the node, or null if there are no child nodes. 
console.log(document.body.childNodes);// The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments. 
let arr = Array.from(document.body.childNodes);
console.log(arr);