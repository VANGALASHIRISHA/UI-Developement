import React from 'react';

export default function TemplateLiterals(){
    var x=10
    var y=20
    var courses=`Python
    Java
    React
    MYSQL
    `
    var s='Full Stack by "Mr.Venu Gopal"'
    return (
      <div>
        <h4>Example on TemplateLiterals</h4>
        {`x value is ${x}`}<br></br>
            {`y value is ${y}`}<br></br>
            {`Addition is ${x+y}`}<br></br>
             {`Courses: ${courses}`}<br></br>
             {s}
      </div>
    )
  }

