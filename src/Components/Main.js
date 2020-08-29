import React from 'react';
import Joke from './Joke';


function Main() {
    return (
        <div>
            <Joke
                punchline="Get pranked!"
            />
            <Joke
                question="How many policemen does it take to change a lightbulb"
                punchline="I don't know"
            />
        </div>
    )
}

export default Main