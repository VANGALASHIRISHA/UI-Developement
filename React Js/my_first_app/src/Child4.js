import React, { useState } from 'react';

export default function Child4() {
    const [value, setValue] = useState(false);

    return (
        <div>
            {value && <span>Short Circuit Evaluation</span>}
            {value && <Test />}
            {(value)?<Test></Test>:<Test2></Test2>}
        </div>
    );
}

const Test = () => {
    return <h4>Test1</h4>;
};
const Test2 = () => {
    return <h4>Test2</h4>;
};

