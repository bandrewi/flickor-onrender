import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const emailError = errors.find(error => error.includes('email'))
    const usernameError = errors.find(error => error.includes('username'))
    const passwordError = errors.find(error => error.includes('Password must'))
    const confirmPasswordError = errors.find(error => error.includes('Confirm'))

    return (
        <div id='signup-form-container'>
            <form onSubmit={handleSubmit}>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                <div id='signup-box'>
                    <img id='login-logo' className='flickor-logo' src='https://i.imgur.com/SpPAHbL.png' alt='' />
                    <h2 id='signup-heading' className="login-signup-heading">Sign up for Flickor</h2>
                    {/* <label>
                        Email */}
                    <input
                        id='email-input'
                        className="login-input"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    // required
                    />
                    {emailError &&
                        <div id='email-error' className="signup-error">
                            {emailError}
                        </div>}
                    {/* </label>
                    <label>
                        Username */}
                    <input
                        id='username-input'
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    // required
                    />
                    {usernameError &&
                        <div id='username-error' className="signup-error">
                            {usernameError}
                        </div>}
                    {/* </label>
                    <label>
                        Password */}
                    <input
                        id='password-input'
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    // required
                    />
                    {passwordError &&
                        <div id='signup-password-error' className="signup-error">
                            {passwordError}
                        </div>}
                    {/* </label>
                    <label>
                        Confirm Password */}
                    <input
                        id='confirm-password-input'
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    // required
                    />
                    {confirmPasswordError &&
                        <div id='confirm-password-error' className="signup-error">
                            {confirmPasswordError}
                        </div>}
                    {/* </label> */}
                    <button id='signup-btn' className='login' type="submit">Sign Up</button>
                    <div id='login-signup-redirect-container'>
                        <span>Already a Flickor member? </span>
                        <Link id='login-signup-redirect' to='/login'>
                            Log in here.
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupFormPage;