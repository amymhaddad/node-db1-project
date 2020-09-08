import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    const activeStyle = {color: "navy"}
    return (
        <>
           <nav>
                <NavLink activeStyle={activeStyle} to="/" exact>Home</NavLink> {" | "}
                <NavLink activeStyle={activeStyle} to="/accounts">Accounts</NavLink>
            </nav>
        </>
    )
}
export default Header