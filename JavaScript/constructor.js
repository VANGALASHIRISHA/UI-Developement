class Person{
constructor(fullname ,address,age){
    this.fullname=fullname;
    this.address=address;
    this.age=age;
}
displayDetails(){
    console.log(`Name: ${this.fullname} from ${this.address} and ${this.age} Years`)
}
}
class Trainer extends Person{
        constructor(fullname,address,age)
{
    super (fullname,address,age);
}
    displayDetails(){
        super.displayDetails();
        // super.displayDetails();
        console.log("I am the trainer for full stack Program");
    }

}
let t1=new Trainer("Shirisha","Hyderabad",22);
t1.displayDetails();


var arr=[5,7,12,30,46,42];
arr.forEach((ele,ind)=>{
    setTimeout(()=>{
        console.log(ele);
    } ,(ind+1)*1000)
})

