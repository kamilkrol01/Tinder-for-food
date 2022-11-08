import React from "react";
import "../Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link, useHistory} from "react-router-dom"


const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className={"header"}>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosNewIcon fontSize={"large"} className={"header__icon"}/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize={"large"} className={"header__icon"}/>
                </IconButton>
            )}
            <Link to="/">
                <IconButton>
                    <RestaurantIcon fontSize={"large"} className={"header__icon"}/>
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