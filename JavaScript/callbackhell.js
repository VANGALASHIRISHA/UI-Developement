let age=25;
var ageCheck=new Promise((res,rej)=>{
    if(age>18)
        res("Eligiable to Vote")
    else
        rej("Not Eligiable to vote");;
})
ageCheck.then((msg)=>console.log(msg));
ageCheck.catch((err)=>console.log(err));
ageCheck.finally(()=>console.log("Thank you"))


console.log("A");
setTimeout(()=>{
    console.log("B")
},1000)
let per=new Promise((res,rej)=>
{
    setTimeout(()=>{
        console.log("C")
 },0)
})
console.log("D");

