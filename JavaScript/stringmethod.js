var str="Welcome to javaScript";
var str=str.concat(" and DRF");
console.log(str);
var arr=str.split(" ");
console.log(arr);



var str="wow";
var arr=str.split("").reverse().join("");
console.log(arr==str?"palindrome":"Not Palindrome");


for(let i=0;i<=100;i++)
{
    console.log(i.toString().padStart(3,"0"));
}

var str="welcome to javascript and DRF and IncokEit";
console.log(str.startsWith("welcome"))
console.log(str.endsWith("pt"))
var str=str.replaceAll("and","&");
console.log(str);
var newstr=str.repeat(3);
console.log(newstr);

var str="welcome to javascript and DRF and IncokEit";

var newstr=str.search(/javaScript/i);
console.log(newstr);

 var str="the rain in the spain mainly in the plain";

var newstr=str.search(/ain/i);
console.log(newstr);
var newstr=str.match(/ain/g);
 console.log(newstr);

var index=str.indexOf("rain");
console.log(index);
var newstr=str.slice(2,-7);
console.log(newstr);
var newstr=str.substring(2,10);
console.log(newstr);
var newstr=str.substr(2,11);
console.log(newstr);

var newstr=str.toUpperCase();
console.log(newstr);
console.log(newstr.charAt(2));


function hello()
{
    console.log("Hello World");
}
console.log("Good Morning");
hello();
setTimeout(hello,3000);
console.log("Bye!...");


for(let i=0;i<=5;i++){
    setTimeout(()=>{
console.log(i)
},3000);
}

setTimeout(()=>{
for(let i=0;i<=5;i++){
    console.log(i);

}

},3000)











