import React from  'react';
import people from './peopleData'
import Person from './Person';

function Main() {
    const peopleComponents = people.map(person => <Person key={person.id} name={person.name} age={person.age}/>)

    return (
        <div>
            {peopleComponents}
        </div>
    )
}

export default Main;