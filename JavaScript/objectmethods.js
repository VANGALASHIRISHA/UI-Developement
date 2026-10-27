// let user={
//     firstName:"Bhaskara",
//     LastName:"Ch",
//     City:"Hyd",



// fullName:function(education){
//     return this.firstName+" "+this.LastName+" completed  "+education;

// }
// }
//  console.log(user.fullName("MBA"));
// let user2={
//     firstName:"Tony",
//     LastName:"Stark",
//     City:"USA"
// }
// console.log(user.fullName.call(user2,"MCA"))


// let user={
//     firstName:"Bhaskara",
//     LastName:"Ch",
//     City:"Hyd",

// fullName:function(education,college){
//     return this.firstName+" "+this.LastName+" completed  "+education +" in "+college;

// }
// }
//  console.log(user.fullName("MBA","Svu"));
// let user2={
//     firstName:"Tony",
//     LastName:"Stark",
//     City:"USA"
// }
// console.log(user.fullName.apply(user2,["MCA","Svu"]));

// let students =[s1,s2,s3];

// let result = user.fullName.bind(user2, "MCA", "SVU");
// console.log(result());

//functional Contructor

function student(studentName,studentClass,studentMarks,studentCity)
{
    this.studentName=studentName;
    this.studentClass=studentClass;
    this.studentMarks=studentMarks;
    this.studentCity=studentCity;
}
let s1=new student("bhasakara","MCA",86,"Hyd");
let s2=new student("Tony","MBA",95,"Sec");
let s3=new student("stark","BTech",93,"Hyd");
// console.log(s3.studentName);

let students=[s1,s2,s3];

// for(let u of students)
// {
//     console.log("*********");

// for(let k in u)
// {
//     console.log(`${k} ${u[k]}`);

// }
// }

// for(let u of students)
// {
//     console.log("********");

    // if(u.studentCity=="Hyd")
    // {
    //     for(let k in u)
    //     {
    //          console.log(`${k} ${u[k]}`);
    //     }
//     // }
// }
//        let toppers=students.filter(i=>i.studentMarks>90)
// console.log(toppers);

// let toppers=students.find(i=>i.studentName=="Tony");
// console.log(toppers);


let people=[

{
    username:"tony",
    age:19
},
{
    username:"crisis",
    age:17
},
{
    username:"stark",
    age:20
}
]
var newpeople=people.map(user=>{
   
    return{
           ...user,
         username:user.username,
        age:user.age,
        isadult:user.age>18
    }
    })
    console.log(newpeople);








