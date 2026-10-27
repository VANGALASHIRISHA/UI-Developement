

//otp
var otp="";
for(let i=0;i<=4;i++)
{
    otp+=Math.round(Math.random()*9);
}
console.log(otp);

let arr1 = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789"
];
let arr = [
"A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9"
];
//captha
var captha=""
for(let i=0;i<=4;i++)
{
 captha+=arr[Math.floor(Math.random()*arr.length)]
}
console.log(captha);


