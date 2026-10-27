function NC(){
    function MyComponent(){
        return(<h3>I am a Nested Component</h3>)
    }
return<div>
<MyComponent></MyComponent>
<MyComponent2></MyComponent2>
    This is Nested Component
</div>
}
export default NC;
function MyComponent2(){
    return <h3> I am Nested MyComponent2</h3>
}
