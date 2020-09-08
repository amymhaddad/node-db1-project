import React from 'react';
import { Link } from 'react-router-dom';

function DisplayAccounts (props) {

    return (
        <>     
            <div>
                <Link to={`/accounts/${props.id}`} className="name">
                    {props.name} -- {props.budget} -- {props.id}
                </Link>
            </div>
        </>
        
    )
}

export default DisplayAccounts;