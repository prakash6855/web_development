class Indianrailwayform{
    constructor(givenname, trainno, address){
        console.log("CONSTRUCTOR CALLED..."+ givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }
    preview() {
        alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
      }
     submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }

  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

    let peterform = new Indianrailwayform("peter", 12345, "patna, bihar-9085111");
    peterform.preview();
    peterform.submit()
    peterform.cancel()
    peterform.preview()