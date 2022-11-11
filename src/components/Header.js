import React from "react";


import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link, useHistory} from "react-router-dom"

import "../css/Header.css"


const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className={"header"}>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosNewIcon fontSize={"large"} className={"header__icon__basket"}/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize={"large"} className={"header__icon"}/>
                </IconButton>
            )}
            <Link to="/">
                <IconButton>
                    <img
                        className={"header__logo"}
                        src="https://i.ibb.co/54pKBb6/logo-do-tindera-removebg-preview.png"
                        alt="tinder logo"
                    />
                </IconButton>
            </Link>
            <Link to="recipes">
                <IconButton>
                    <ShoppingBasketIcon fontSize={"large"} className={"header__icon"}/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;