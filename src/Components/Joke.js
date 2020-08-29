import React from 'react';

function Joke(props) {
    let question = "";
    if (props.question) {
        question = props.question
    } else {
        question = "There is no question, just a punchline!"
    }
    return (
        <div>
            <h3>The question is: {question}</h3>
            <h3>The answer is: {props.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke