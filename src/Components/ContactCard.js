import React from 'react';

function ContactCard(props) {
const styles = {
    backgroundColor: "#ffad60",
    width: 500,
    margin: "auto"
}

    return (
    <div style={styles}>
        <p>Name: {props.name}</p>
        <p>Number: {props.number}</p>
        <p>Email: {props.email}</p>
    </div>
    );
}

export default ContactCard;