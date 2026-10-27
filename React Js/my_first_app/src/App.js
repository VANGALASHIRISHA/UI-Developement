import { useState } from 'react';
import './App.css';

import Component1 from './Component1';
import NameContext from './NameContext';
{/*import logo from './logo.svg';
  import UseCallBackHook from './UseCallBackHook';
  import Child from './Child';
import Child2 from './Child2';
import NC from './NestedComponent';
import { NestedFunction } from './NestedFunction';
import { useState } from 'react';
import Child3 from './Child3';
import ArrayDestructure from './ArrayDestructure';
import ObjectDestructure from './ObjectDestructure';
import Test from './Test';
import Test2 from './Test2';
import TestEvents from './TestEvents';
import TemplateLiterals from './TemplateLiterals';
import Child4 from './Child4';
import SpreadOperator from './SpreadOperator';
import TestMap from './TestMap';
import UseStateHook from './UseStateHook';
import UseEffectHook from './UseEffectHook';
import UserReducerHook from './UserReducerHook';
import UseRefHook from './UseRefHook';
import UseMemoHook from './UseMemoHook';*/}

 
function App() {
  //var [name,updateName]=useState("Venu Gopal");
  //var id=101;
  //var name="Venu";
  //var Salary=5.5;
  // var[array,setArray]=useState([["101  ","Akshaya"],["  102  ","Akhil"]]);
  //var [emp,setEmployee]=useState([
    /*{
      id:101,
      name:"venu",
      designation:"Python Trainer"
    }
  ]);*/
 //var designation="React Developer"
 var [name,updateName]=useState("Venu Gopal");
  return (
    <div className="App">
      <header className="App-header">
           <h1>Parent Component</h1>

        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br></br>
        {/*ID:{id}<br></br>
        NAME:{name}<br></br>
        SALARY:(Salary)
        <Child></Child>
        <Child2></Child2>
        <NC></NC>
        <NestedFunction></NestedFunction>
      
        <Child3 My_Name={name}></Child3>
             {array}
              {emp.id}
                 <Test></Test>
       <ArrayDestructure array={array}></ArrayDestructure>*/}

       {/* Since emp is an array, pass the first object to ObjectDestructure 

       {emp.length > 0 && <ObjectDestructure e={emp[0]}></ObjectDestructure>
       
      <Test2 desig={designation}></Test2>}
          <TemplateLiterals></TemplateLiterals>
                <Child4></Child4>
       <TestEvents></TestEvents>
       <SpreadOperator></SpreadOperator>
         <UseStateHook></UseStateHook>
                <UseEffectHook></UseEffectHook>
                  <UserReducerHook></UserReducerHook>
                     <UseRefHook></UseRefHook>
                      <UseMemoHook></UseMemoHook>
                      <UseCallBackHook></UseCallBackHook>
       <TestMap></TestMap>*/}
       <NameContext>
<Component1></Component1>
       </NameContext>
      </header>
    </div>
  );
}
export default App;
