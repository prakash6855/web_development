// let a = new Date();
// let d = a.getDate();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// console.log(d+":"+h+":"+m+":"+s);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time values to ensure they have two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the HTML element with the formatted time
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);