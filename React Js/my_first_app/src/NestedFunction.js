export function NestedFunction(){
    function test(){
alert("I am Nested Function")
    }
    return (<div>
        <h2> Ex on Nested Function</h2>
        <button onClick={test()} classnam></button>
    </div>)
}