import "./Header.css"
import Logo from "../../../public/logo.svg"
import Search from "../../../public/search.svg"
import Cart from "../../../public/shopping-cart.svg"

export default function Header(){
    return(
        <header>
            <img className="logo" src={Logo} alt="logo"/>
            <div className="function-buttons-container">
                <div className="shop-buttons">
                    <button className="shop-button">
                        <img className="shop-button-image" src={Search} alt="search"/>
                    </button>
                    <button  className="shop-button">
                        <img className="shop-button-image" src={Cart} alt="cart"/>
                    </button>
                </div>
                <div>
                    <button className="account-button registration">
                        Sign Up
                    </button>
                    <button  className="account-button login">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    )
}