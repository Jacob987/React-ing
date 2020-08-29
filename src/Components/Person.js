import React from 'react';

function Person(props) {
    const style = {
        fontSize: 35,
        textAlign: "center"
    }
    return (
        <div style={style}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <hr/>
        </div>
    )
}

export default Person;