var arr1=[1,2];
var arr2=[3,4,5];
console.log(arr1+""+arr2);


var obj={};
obj[1]="Bhasakara";
obj["1"]="DRF";
console.log(obj[1]);

function printa(a=10)
{
    console.log(a);
}
printa(5);
printa(undefined);
printa(null);

console.log(parseInt("10+2"))
console.log(parseInt("2+10"))

if(true)
{
    let a=b=10;
    console.log(a+" "+b);
}
console.log(b)


console.log("A");
setTimeout(()=>console.log("B"),0);
// Promise.resolve().then(()=>console.log("C"));
Promise.resolve().then(setTimeout(()=>console.log("C"),0));
console.log("D");

Promise.resolve(10)
.then(x=>x+2)
.then(x=>{x+3})
.then(x=>console.log(x));