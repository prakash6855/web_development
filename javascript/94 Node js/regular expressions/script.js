// Refer to https://regexr.com/ for more info

// const regex = /,/g;
// const text = "I have a cat, rat, bat";
// console.log(text.replace(regex, " and"));

const regex = /(Jerry){2}/gi;
const text = "JerryJerry is a very very nice awesome nice very boy";
console.log(text.replace(regex, "VERY"));