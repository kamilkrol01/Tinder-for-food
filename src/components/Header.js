import React from "react";
import "../Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IconButton from "@mui/material/IconButton";


const Header = () => {
    return (
        <div className={"header"}>
            <IconButton>
                <PersonIcon fontSize={"large"} className={"header__icon"}/>
            </IconButton>
            <IconButton>
                <RestaurantIcon fontSize={"large"} className={"header__icon"}/>
            </IconButton>
            <IconButton>
                <ShoppingBasketIcon fontSize={"large"} className={"header__icon"}/>
            </IconButton>

        </div>
    )
}

export default Header;