import React, { useState } from 'react';
import './App.css';

function Room() {
    const [islit, setlit] = useState(false);
    let [age, setAge] = useState(30);

    function update_button() {
        setlit(!islit);
    }

    // const update_age = () => {
    //     setAge(++age);
    // }
    return ( <
        div className = "room" > The Room is { islit ? 'Lit' : 'Dark' } <
        br / >
        age = { age }; <
        br / > < br / >

        <
        button onClick = {
            () => setlit(!islit)
        } > Toggle Light < /button>   <
        button onClick = {
            () => {
                setAge(++age);
            }
        } > Increase age < /button>  < /
        div >
    );
}

export default Room;