import React from 'react';

function DisplayAccount(props) {
    return (
        <>
            {props.name} {props.budget}
        </>
    )
}

export default DisplayAccount;