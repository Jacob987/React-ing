import React from 'react';

// function Person(props) {

//     const divStyle = {
//         fontSize: 35,
//         textAlign: "center"
//     }

//     const nameStyle = {
//         fontFamily: "Times New Roman, Times, serif",
//         fontStyle: "oblique"
//     }

//     return (
        
//     )
// }

class Person extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    styling() {
        const styles = {
            fontSize: 30,
            textAlign: "center",
            margin: "auto",
            fontFamily: "Helvetica"
        }
        return styles;
    }

    render() {
        return (
            <div style={this.styling()}>
                <h2>{this.props.name}</h2>
                <p>Age: {this.props.age}</p>
                <hr/>
            </div>)
    }
}

export default Person;
// 2:01:34 