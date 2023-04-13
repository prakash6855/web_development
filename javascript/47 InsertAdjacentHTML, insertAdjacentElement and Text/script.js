// insertAdjacentHTML() method:-----The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position."beforebegin" Before the element. Only valid if the element is in the DOM tree and has a parent element.

// New.insertAdjacentHTML('beforebegin', '<div class="test">Beforebegin</div>');

// "beforeend":---Just inside the element, after its last child.
// New.insertAdjacentHTML('beforeend', '<div class="test">Beforeend</div>');

// "afterbegin":----Just inside the element, before its first child.
// New.insertAdjacentHTML('afterbegin', '<div class="test">Afterbegin</div>');

// "afterend":----After the element. Only valid if the element is in the DOM tree and has a parent element.
// New.insertAdjacentHTML('afterend', '<div class="test">Afterend</div>');


// remove() method:-----The Element.remove() method removes the element from the DOM.
// New.remove();