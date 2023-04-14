/*
//Adding and removing event listener


let a = function(e){
  alert("Hiii there1");
}

let b = function(e){
  alert("Hello2");
}
btn.addEventListener('click', a);  //addEventListener() method:----The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
btn.addEventListener('click', b);

let num = prompt("Enter your favourite number");

if(num == "2"){
  btn.removeEventListener('click', a);  //removeEventListener() method:-----The removeEventListener() method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.
}


*/

  
let a = function(e){
    alert("Hiii there1");
    console.log(e.target);
    console.log(e);
    console.log(e.type, event.clientX, event.clientY);//Event: type property:---The type read-only property of the Event interface returns a string containing the event's type. It is set when the event is constructed and is the name commonly used to refer to the specific event, such as click, load, or error.
    // clientX property:---The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).
    // clientY property:----The clientY read-only property of the MouseEvent interface provides the vertical coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).
    
  }
  
  let b = function(e){
    alert("Hello2");
  }
  btn.addEventListener('click', a);
  // btn.addEventListener('click', b);
  
  // let num = prompt("Enter your favourite number");
  
  // if(num == "2"){
  //   btn.removeEventListener('click', a);
  // }
  
  