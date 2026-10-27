var marvel=["Ironman","Capt america","Thor","Black pather","Hulk","thanos"];
console.log("Original  "+marvel);
marvel.push("bhasakara");
console.log("Modified array   "+marvel);


 var students=["Siri","Sreevalli","Snehika","Sindhu","Munni","Kavay","Yamini"];
console.log("Originaal   "+students);
students.pop();
students.shift();
students.unshift("Siri");
students.splice(1,2,"hello");
console.log("Modigied array Splice  "+students);

delete students[1];
var newarray=students.slice(1,4);
console.log("Modigied array   "+newarray);

 var index = students.indexOf("Siri");
var lastindex=students.lastIndexOf("Sindhu");
var lastindex=students.lastIndexOf("Bhasakara");
var sortedorder=students.sort();
var sortedorder=students.sort((a,b)=>b-a);
var sortedorder=students.sort().reverse();

 var newstudents=students.join("/");
//  console.log("Modigied array   "+newstudents);
var dc=["Harika","Anjali","Abhinaya"];
 var newstudents=students.concat(dc);
console.log("Modigied array   "+newstudents);


