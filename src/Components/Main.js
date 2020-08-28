import React from 'react';
import ContactCard from './ContactCard'

function Main() {
    const styles = {
        backgroundColor: "#ffe0bd",
        fontSize: 25,
        marginWidth: 50
    }


    return (
        <main style={styles}>
            This is the main
            <ContactCard
                contact=
                {
                    {
                        name: "Jin Ku Kim",
                        number: "02102428857",
                        email: "jkkim1998@gmail.com"
                    }
                }
            />
        </main>
    )
}

export default Main;