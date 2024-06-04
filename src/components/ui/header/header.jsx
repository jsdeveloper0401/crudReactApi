import "./header.css";
import routes from "@routes";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@img/navLogo.svg";
import Login from "@img/login.png";
import Burger from "@img/burger.png";
import Search from "@img/search.svg";

const Index = () => {
    const location = useLocation();
    console.log(location);

    return (
        <header className="header">
            <div className="container-header">
                <nav className="nav d-flex align-items-center">
                    <NavLink to="/">
                        <img src={Logo} className="nav-logo-img" alt="Logo" />
                    </NavLink>
                    <ul className="d-flex align-items-center m-0 w-15%">
                        {routes?.map((item, index) => (
                            <li key={index} className="list-unstyled nav-item">
                                <NavLink
                                    to={item.path}
                                    className={`text-decoration-none  ${
                                        location.pathname === item.path
                                            ? "active"
                                            : ""
                                    }`}>
                                    {item.content}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="input-group">
                        <div className="search-wrapper">
                            <img
                                src={Search}
                                alt="search icon"
                                className="search-icon"
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Search"
                            />
                        </div>
                        <button className="nav__btn">
                            <NavLink to={"/"}>
                            <img src={Login} alt="Login" className="nav__img" />
                            </NavLink>
                        </button>
                        <button className="nav__btn">
                            <img
                                src={Burger}
                                alt="burger menu"
                                className="nav__img"
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Index;
