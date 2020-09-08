import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../common/Header"
import DisplayAccount from "./DisplayAccount"
import {serverApi} from "../common/Urls"

function Account (props) {

    const [account, setAccount] = useState([])

    useEffect(() => {
        const url = `${serverApi} ${props.match.params.accountId}`
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setAccount(response.data)
        })
        .catch(err => {
            console.log("error", err)
        })
    }, [])

    return (
        <>
        <Header />
            <DisplayAccount 
                key = {account.id}
                name = {account.name}
                budet = {account.budget}
            />
        </>
    )
}
 
export default Account;
