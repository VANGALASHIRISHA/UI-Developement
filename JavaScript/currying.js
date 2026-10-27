function add(a,b,c)
{
    return a+b+c;
}
console.log(add(5,6,8));

function add(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
console.log(add(5)(2)(3));

function multifly (a)
{
    return function(b){
        return a*b;
    }
}
console.log(multifly(5)(4))
var double=multifly(2);
var triple=multifly(3);
console.log(double(5));
console.log(triple(5));