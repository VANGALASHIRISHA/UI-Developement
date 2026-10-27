let result=new Promise((res,rej)=>{
    setTimeout(()=>{
      res("resolved");
    },3000)
})
   async function hello()
{
 console.log("A");
    let re=await result;
    console.log(re);
    console.log("B")
}
hello();
 async function hello()
{
    return "Hello World"
}
console.log(hello());