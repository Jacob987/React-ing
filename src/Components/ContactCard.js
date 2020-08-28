import React from 'react';

function ContactCard(props) {
const styles = {
    backgroundColor: "#ffad60",
    width: 500,
    margin: "auto"
}

    return (
    <div style={styles}>
        <p>Name: {props.contact.name}</p>
        <p>Number: {props.contact.number}</p>
        <p>Email: {props.contact.email}</p>
    </div>
    );
}

export default ContactCard;