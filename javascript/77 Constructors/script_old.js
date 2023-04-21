class Indianrailwayform{
    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLED..."+ givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
    }
    submit() {
    alert(this.name + ": Your form submitted for the given train no : "+ this.trainno);
    }
    cancel() {
        alert(this.name + ": Your form is cancelled for the given train no : "+ this.trainno)
    }
    }
    
    //Create and fill a form 
    let peterform = new Indianrailwayform("Peter", 12345);
    // No need to Fill the details
    // peterform.fill("Peter", 12345);
    //Create and fill a form 
    let pabloform1 = new Indianrailwayform("Pablo", 67890);
    let pabloform2 = new Indianrailwayform("Pablo", 99999);
  
    
    
    peterform.submit();
    pabloform1.submit();
    pabloform2.submit();
    pabloform2.cancel();