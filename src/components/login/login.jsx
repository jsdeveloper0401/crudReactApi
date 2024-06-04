import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        if (username === "admin" && password === "123") {
            navigate("/main/cars");
        } else {
            alert("404 => Something went wrong");
        }
        setForm({ username: "", password: "" });
    };

    return (
        <section className="Login">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 mt-5 responsive">
                        <form id="form" onSubmit={handleSubmit}>
                            <div className="card card1">
                                <div className="card-header">
                                    <h1 className="text-center">
                                        Tizimga kirish
                                    </h1>
                                </div>
                                <div className="card-body">
                                    <input
                                        value={form.username}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control my-2"
                                        name="username"
                                        placeholder="Username"
                                    />
                                    <input
                                        value={form.password}
                                        onChange={handleChange}
                                        type="password"
                                        className="form-control my-2"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="btn btn-info"
                                        type="submit"
                                        form="form">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
