let key = prompt("Enter the key");
let value = prompt("Enter the value");

// setItem() method:----The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists. 
localStorage.setItem(key, value);

// getItem() method:----The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object. 
console.log(`The value of ${key} is ${localStorage.getItem(key)}`);

// removeItem() method:------The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists. The Storage interface of the Web Storage API provides access to a particular domain's session or local storage. If there is no item associated with the given key, this method will do nothing.
if (key == "red" || key == "pink"){
    console.log(localStorage.removeItem(key));
}


// clear() method:-----The clear() method of the Storage interface clears all keys stored in a given Storage object. 
if(key == 0){
    localStorage.clear();
}
//.length:------This method describes the number of stored items
localStorage.length;

