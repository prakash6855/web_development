class Indianrailwayform{
submit() {
alert(this.name + ": Your form submitted for the given train no : "+ this.trainno);
}
cancel() {
    alert(this.name + ": Your form is cancelled for the given train no : "+ this.trainno)
}
fill(givenname, trainno){
    this.name = givenname;
    this.trainno = trainno;
}
}
//Create a form 
let peterform = new Indianrailwayform();
// Fill the details
peterform.fill("Peter", 12345);
//Create a form 
let pabloform1 = new Indianrailwayform();
let pabloform2 = new Indianrailwayform();
// Fill the details
pabloform1.fill("Pablo", 67890);
pabloform2.fill("Pablo", 99999);



peterform.submit();
pabloform1.submit();
pabloform2.submit();
pabloform2.cancel();