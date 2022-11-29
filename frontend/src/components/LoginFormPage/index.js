import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from "../../store/session";

import './LoginForm.css';
import { getPhotos, getUserPhotos } from '../../store/photo';
// import { getFavorites } from '../../store/favorite';

export default function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleClick = async () => {
        const credential = 'demo@user.io'
        const password = 'password'
        const user = await dispatch(login({ credential, password }))
        if (user) {
            await dispatch(getPhotos())
            await dispatch(getUserPhotos(user.id))
            // await dispatch(getFavorites())
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.login({ credential, password }))
            .then(user => dispatch(getUserPhotos(user.id)))
            .then(() => dispatch(getPhotos()))
            // .then(() => dispatch(getFavorites()))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const credentialError = errors.find(error => error.includes('email'))
    const passwordError = errors.find(error => error.includes('password'))
    const invalidCredentialError = errors.find(error => error.includes('credentials'))

    return (
        <div id='login-form-container'>
            <form id='login-form' onSubmit={handleSubmit}>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                <div id='box'>
                    <img id='login-logo' className='flickor-logo' src='https://i.imgur.com/SpPAHbL.png' alt='' />
                    <h2 className='login-signup-heading'>Log in to Flickor</h2>
                    {/* <div> */}
                    {/* <label>
                        Username or Email */}
                    <input
                        id='credential'
                        className='login-input'
                        placeholder='Username or Email'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                    // required
                    />
                    {credentialError && <div id='credential-error'>{credentialError}</div>}
                    {/* </label> */}
                    {/* </div> */}
                    {/* <div> */}
                    {/* <label>
                        Password */}
                    <input
                        id='password'
                        className='login-input'
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    // required
                    />
                    {passwordError && <div id='password-error'>{passwordError}</div>}
                    {invalidCredentialError &&
                        <div id='invalid-credential-error'>{invalidCredentialError}</div>}
                    {/* </label> */}
                    {/* </div> */}
                    <button className='login' type="submit">Log In</button>
                    <div id='login-signup-redirect-container'>
                        <span>Not a Flickor member? </span>
                        <Link id='login-signup-redirect' to='/signup'>
                            Sign up here.
                        </Link>
                        <div id='demo-container'>Don't want to create an account?
                            <span id='demo' onClick={handleClick}> Demo User</span>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    );
}