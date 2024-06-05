// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const currentPath = location.pathname;

//     const logOut = () => {
//         localStorage.clear();
//         navigate("/");
//     };

//     const links = [
//         {
//             path: "/main",
//             label: "Cars",
//             additionalClass: " text-bold",
//         },
//         { path: "/main/users", label: "Users" },
//         { path: "/main/todos", label: "Todos" },
//         { path: "/main/photos", label: "Photos" },
//     ];

//     return (
//         <div className="sidebar">
//             <h1 className="text-white">Dashboard</h1>
//             {links.map((link) => (
//                 <NavLink
//                     key={link.path}
//                     to={link.path}
//                     className={`navLink ${
//                         currentPath === link.path
//                             ? link.additionalClass || "active"
//                             : ""
//                     }`}>
//                     {link.label}
//                 </NavLink>
//             ))}
//             <NavLink
//                 to="/"
//                 onClick={logOut}
//                 className={`navLink ${currentPath === "/" ? "active" : ""}`}>
//                 <span className="span">
//                     Logout
//                     <i className="fa-solid fa-right-from-bracket"></i>
//                 </span>
//             </NavLink>
//         </div>
//     );
// };

// export default Sidebar;


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
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={`navLink ${
                        currentPath === link.path ? "active" : ""
                    }`}>
                    <i className={`fa ${link.icon}`}></i>
                    <span>{link.label}</span>
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


