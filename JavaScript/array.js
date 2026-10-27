// var arr=[5,7,12,30,46,42];
// console.log(arr)
// var arr=new Array();
// arr[0]=2;
// arr[1]=3;
// arr[2]=6;
// arr[3]=7;
console.log(arr.length)
console.log(arr)



 var arr=[5,7,12,30,46,42];
 
 for(let i=0;i<=arr.length;i++)
 {
    console.log(i);
 }
for (let i of arr)
{
    // console.log(i);
    console.log(i%2==0?i:"hello")

}
