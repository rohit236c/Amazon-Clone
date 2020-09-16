import React from 'react';
import amazon from './images/logo_-1.jpg'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Header = () => {
    return (
        <nav className="header">

            <Link to="/">
                <img className="header__logo" src={amazon} alt=""/>
            </Link>

            <div className="header__search">
                <input name="" id="" className="header__searchInput" value=""/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Hello</span>
                        <span className="header__optionTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionTwo header__basketCount">0</span>
                    </div>
                </Link>
                
            </div>

        </nav>
    )
}

export default Header;
