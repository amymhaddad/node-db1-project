import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../common/Header"
import DisplayAccounts from "./DisplayAccounts"
import AccountIntro from "../common/AccountIntro"
import {serverApi} from "../common/Urls"

function Accounts () {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const url = `${serverApi}`
        axios.get(url)
        .then(response => {
            setAccounts(response.data)
        })
        .catch(err => {
            console.log("Err", err)
        })
    }, [])

    return (
        <>
            <Header />
            <AccountIntro />
            {accounts.map(account => (
                 <DisplayAccounts
                    id = {account.id}
                    name = {account.name}
                    budget = {account.budget}
                 />
            ))}
        </>
    )
}

export default Accounts;