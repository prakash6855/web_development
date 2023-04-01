let p = prompt("Enter the number between 1 to 5");
p = Number.parseInt(p);
switch (p) {
    case 1:
        console.log("Today is monday so we read maths");
        break;
    case 2:
        console.log("Today is tuesday so we read science");
        break;
    case 3:
        console.log("today is wednesday so we read english");
        break;
    case 4:
        console.log("today is thursday so we read hindi");
        break;
    case 5:
        console.log("today is friday so we read economics");
        break;
    default:
        console.log("Hurray weekend started no classes are there");
} 