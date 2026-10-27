function incr(){
    let i=0;
    function inner()
    {
       return i++;
    }
    return inner;
}
var result=incr();
console.log(result());
console.log(result());
console.log(result());
console.log(result());