/*

// To print the string value
let name = "Prakash";
console.log(name);


// To print the string value we can use double/single strings also
let fname = 'Vikas';
console.log(fname);


// If we want the length of the string that how long it is
let firstname = "Koushik";
console.log(firstname.length);

//If we want only letters from the string (string starts from 0 position to the end)
let lastname = "SHARMA";
console.log(lastname[3]);



// Template literals
let student1 = "Nikita";
let student2 = "Nobita";
 let sentence = `${student1} is a friend of ${student2}`;
 console.log(sentence);

// Use of backslash "\"
 let fnaam = 'Leonardo D\'Caprio';
 let snaam = `Vinchi`;
 console.log(fnaam + " " +snaam);

//Use of \n
let def1 = `Major \nDhyanchand`;
console.log(def1);

//Use of \r :- Here Bhatia word will overlap Rajeev and printing will be done from the begining
let man1 = `Rajeev \rBhatia`;
console.log(man1);

//Use of \t :- If we want to add a tab between the word then we can do it with \t
let singer1 = `Late\tLata\tMangeshkar`;
console.log(singer1);


*/


// String properties and methods ----------------------------
// to get the  length of a word
let name2 = "Rajat";
console.log(name2.length);

// To extract the letter from the word after providing the position
let naam1 = "Peter";
console.log(naam1[3]);

// To print the word in uppercase 
let naam21 = "prakash";
let naam3 = naam21.toUpperCase();
console.log(naam3);


// To print the word in lowercase 

let naperu = "SURYA";
let naperu1 = naperu.toLowerCase();
console.log(naperu1);

// TO slice a letter from a name :- Into this the letter will be sliced from the starting position as provided but end a letter before the last letter
let naperu2 = "PAGLA";
let naperu3 = naperu2.slice(1, 4);
console.log(naperu3);

// To slice the letter from the given word/// Here we have enter only the initial position so it will print the value including the initial position till the last.
let naperu4 = naperu2.slice(2);
console.log(naperu4);

// To replace something from the given sentence we use replace keyword and use it as per the code given bellow
let word = "Jai Jawan Jai Kishan";
let newword = word.replace("Jai Jawan", "Jai Jawan Jai Kishan Jai Vigyan");
console.log(newword);

//concat() method:----
// concat() method joins two or more strings.
// The concat() method does not change the existing strings.
// The concat() method returns a new string.
 let word1 = "Jai";
 let word2 = "Hind";
let word3 = word1.concat(" " + word2);
console.log(word3);



// To remove the whitespaces from the word we use trim keyword and use it as per the code given bellow
let subject = " Mathematics "
let sub1 = subject.trim();
console.log(sub1);


// Use for loop to print a string

let mobile = "Android";
for(let i = 0; i < mobile.length; i++){
console.log(mobile[i]);
}