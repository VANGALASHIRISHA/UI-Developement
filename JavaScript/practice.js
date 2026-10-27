const users1=[
    {name:"Rahul",status:"active"},
     {name:"Anita",status:"inactive"},
      {name:"Kiran",status:"active"},
       {name:"Sneha",status:"inactive"},
];
var newusers=users1.filter(user=>user.status=="active");
console.log(newusers);

const cart=[
    {item:"Laptop",Price:50000},
    {item:"Mouse",Price:500},
    {item:"KeyBoard",Price:1500},
];
const total=cart.reduce((sum,item)=>sum+item.Price,0);
console.log(total);

const users=[
    {name:"Arjun",email:"arjun@gmail.com"},
     {name:"Priya",email:"Priya@gmail.com"},
      {name:"Karthik",email:"karthik@gmail.com"}
];
var emailusers=users.map(user=>user.email);
console.log(emailusers);
const Products=[
     {item:"Laptop",Stock:0},
    {item:"Phone",Stock:5},
    {item:"Tablet",Stock:3},
];
const  availableProducts=Products.map(stck=>{
    return{
        ...Products,
        isNotAvailable:(stck.Stock>0 || stck.Stock!=0)
    }
})
console.log(availableProducts);

