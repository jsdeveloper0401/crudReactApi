import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    const links = [
        {
            path: "/main",
            label: "Cars",
            icon: "fa-car",
        },
        { path: "/main/users", label: "Users", icon: "fa-users" },
        { path: "/main/todos", label: "Todos", icon: "fa-list" },
        { path: "/main/photos", label: "Photos", icon: "fa-camera" },
    ];

    return (
        <div className="sidebar">
            <h1 className="text-white">Dashboard</h1>
            {links.map((item,index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={`navLink ${
                        currentPath === item.path ? "active" : ""
                    }`}>
                    <i className={`fa ${item.icon}`}></i>
                    <span>{item.label}</span>
                </NavLink>
            ))}
            <NavLink
                to="/"
                onClick={logOut}
                className={`navLink ${currentPath === "/" ? "active" : ""}`}>
                <small className="span">
                    <span>Logout</span>
                    <i className="fa-solid fa-right-from-bracket logout-span"></i>
                </small>
            </NavLink>
        </div>
    );
};

export default Sidebar;
