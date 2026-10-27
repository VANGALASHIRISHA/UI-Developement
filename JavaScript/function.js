function display(a,b)
{
    return a+b;
}
console.log(display(5,7));


console.log("Hello","World");
function sum(a,b)
{
    return a+b;
}


var sum=function(a,b)
{
    return a+b;
}
console.log(sum(5,6));

var sum=function(a,b)
{
    return "WelCome to Js";
}
console.log(sum("Hello","World"))// //*it doesnot show any error it return compainsary*



var sum=(a,b) => a+b;
console.log(sum(5,7));

var sum=(a,b)=>{return a+b};
console.log(sum(5,7));


setInterval (function()
{
    console.log("Hello World")
},2000);
 clearInterval;
(function(){
    console.log("Hello ,World")
})

 var arr=[5,7,12,30,46,42];
arr.forEach(multiplywith2);
function multiplywith2(a){
    console.log(a*2);
}

arr.forEach((a)=>{console.log(a*2);});
arr.forEach(function multiplywith2(a){
     console.log(a*2);
 });


console.log("Original "+arr);

arr.forEach((a,ind)=>{arr[ind]=a*2});
console.log("updated array "+arr);

Map
var updatedarr=arr.map((a)=>a*2);
 console.log("Updated "+updatedarr);


var arr=["Ironman","capt America","thor","hulk","thanous"];

var ele=arr.findIndex((i)=>i.length<6)
 console.log(ele);
var ele=arr.find((i)=>i.length<5)
console.log(ele);


var arr=[5,7,12,30,46,42];
var sum=arr.reduce((acc,i)=>acc+i);
console.log(sum);


var sum=arr.filter((i)=>i%2==0).reduce((bs,i)=>bs+i);
console.log(sum);

var arr=[5,7,12,-30,-46,42];
var isPositie=arr.every(i=>i>0);

console.log(isPositie);