import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const SignUp = () => {
    const [input, setInput] = useState({ fname: '', lname: '', email: '', password: '' });
    const [allData, setAllData] = useState([]);
    const navigate = useNavigate();

    const changeHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const clickHandle = (e) => {
        e.preventDefault();
        let getData = JSON.parse(localStorage.getItem("user")) || [];
        let getIndexNumber = getData.findIndex((ele) => ele.email === input.email);

        if (getIndexNumber === -1) {
            let localData = [...allData, input];
            setAllData(localData);
            localStorage.setItem("user", JSON.stringify(localData));

            toast.success("Registration Successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setInput({ fname: '', lname: '', email: '', password: '' });
            navigate('/Login');
        } else {
            toast.warn("This user already exists!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <form style={{ border: '2px solid black', width: '50rem', margin: 'auto', padding: '20px', marginTop: '2rem', marginBottom: '2rem' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', textDecoration: 'underline' }}>Signup</h1>

                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.4rem', fontStyle: 'italic', textDecorationColor: 'Highlight' }}>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fname"
                        placeholder="First Name"
                        value={input.fname}
                        onChange={changeHandle}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.4rem', fontStyle: 'italic', textDecorationColor: 'Highlight' }}>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lname"
                        placeholder="Last Name"
                        value={input.lname}
                        onChange={changeHandle}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.4rem', fontStyle: 'italic', textDecorationColor: 'Highlight' }}>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={input.email}
                        onChange={changeHandle}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.4rem', fontStyle: 'italic', textDecorationColor: 'ButtonText' }}>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onChange={changeHandle}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ display: 'flex', margin: 'auto', textDecorationColor: 'ButtonText' }}
                    onClick={clickHandle}
                >
                    SignUp
                </button>
            </form>
        </>
    );
};

export default SignUp;
