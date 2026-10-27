function hello()
{
    setTimeout(()=>{
        console.log("Hello World");
    },5000);
}
 function greet()
 {
    console.log("How Are You");
 }
 hello();
 greet()


function hello(ch)
{
    setTimeout(()=>{
        console.log("Hello World");
        ch();
    },5000)
}
function greet()
{
    console.log("How are You");
}
hello(greet);


function hello(ch,ed)
{
    setTimeout(()=>{
        console.log("How Are You")
    },5000);
    ch(ed);
}
function greet(another){
    console.log("How are You")
    another();
}
function display(){
    console.log("BYE");
}
hello(greet,display);