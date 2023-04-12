let stat1 = document.getElementById("stat1");
let sp1 = document.getElementById("sp1");
console.log(stat1);
console.log(stat1.matches(".Class"));//Here id will matches with class and return boolean value
console.log(stat1.matches(".class"))//returns false as it is not matches with the selector
console.log(sp1.closest(".Class"));
console.log(sp1.closest("#sp1"));
console.log(sp1.contains(sp1));
console.log(stat1.contains(sp1));
console.log(sp1.contains(stat1));