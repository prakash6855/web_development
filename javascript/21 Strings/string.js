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
let singer1 = `Late\tKishore\tKumar`;
console.log(singer1);