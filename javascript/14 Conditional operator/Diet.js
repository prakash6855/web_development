let a = prompt("Enter the number you want to know about your diet schedule");
a = Number.parseInt(a);
switch (a) {
    case 1:
        console.log("On sunday you eat kheer");
        break;
    case 2:
        console.log("On monday you will eat poha");
        break;
    case 3:
        console.log("On tuesday you will not eat salt");
        break;
    case 4:
        console.log("On wednesday you will  eat biryani");
        break;
    case 5:
        console.log("On thursday you will eat chapatis");
        break;
    case 6:
        console.log("On friday you will  eat dosa");
        break;
    case 7:
        console.log("On saturday you will  eat khichdi");
        break;
    default:
        console.log("Invalid day")

}