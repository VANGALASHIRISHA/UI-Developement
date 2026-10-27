

user={
    "firstname":"Shirisha",
    "LastName":"V",
    "City":"Hyd",
}
console.log(user.firstname);
console.log(user["LastName"])
console.log(user.firstname);
console.log(user["firstname"])
console.log(user["City"])
console.log(Object.keys(user));
console.log(Object.values(user));
for( let key in user)
{
    // console.log(`${key}:${user[key]}`)
       console.log(user[key]);
   
}

var u1=new Object();
u1.firstname="Tony";
u1.Lastname="Stark";
u1.City="USA"
console.log(u1);
for( let k in u1)
{
    document.writeln('${k}:$"{u1[k]}')
    console.log(`${k}:${u1[k]}`)
}

let user={
    firstname:"Bhaskar",
    LastName:"Ch",
    City:"Hyd"
}
// let u1=user;
let u1=JSON.parse(JSON.stringify(user));
 u1.City="Vizag";
 console.log(u1);
 console.log(user);//Shallow copy it is a Same references in address


