let key = prompt("Enter the key");
let value = prompt("Enter the value");
// sessionStorage.setItem():----Stores one or more items in the storage area. If the item exists, its value is updated.

sessionStorage.setItem(key, value);

// sessionStorage.getItem():----Retrieves one or more items from the storage area.

console.log(`The value of ${key} is ${sessionStorage.getItem(key)}`);


// sessionStorage.removeItem():----- Removes one or more items from the storage area.

if (key == "red" || key == "pink"){
    console.log(sessionStorage.removeItem(key));
}

// sessionStorage.clear() method:-----The clear() method of the Storage interface clears all keys stored in a given Storage object. 
if(key == 0){
    sessionStorage.clear();
}

// sessionStorage.key() method:-----Gives the key on the given position
sessionStorage.key(0)//0 here is index value

//sessionStorage.length:------This method describes the number of stored items
sessionStorage.length;

