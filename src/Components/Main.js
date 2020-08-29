import React from  'react';
import people from './peopleData'
import Person from './Person';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleList: people
        };
    }
    render() {
        const peopleComponents = this.state.peopleList.sort(function (person1, person2) {
            if (person1.age < person2.age) {
                return -1
            }
            else if (person1.age === person2.age) {
                return 0;
            }
            else {
                return 1;
            }
        }).map(person => <Person key={person.id} name={person.name} age={person.age}/>)
    
        return (
            <div>
                {peopleComponents}
            </div>
        )
    }
    
}

export default Main;