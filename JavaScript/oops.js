class display{

    constructor(greet){
        this.greet=greet;
    }
    greetnow(){
        console.log(`Hello ${this.greet}`);
    }
    static wish()
{
    console.log("Good Morning")
}
// console.log(p1.getUser());
// display.wish();
}
var p1=new display("How are You");
p1.greetnow();

display.wish();
