import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import UploadButton from './UploadButton';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()
    // console.log('LOCATION', location.pathname)
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='nav-bar user-nav'>
                {/* <div id='nav-bar-div'> */}
                <ul id='user-left-nav'>
                    <li id='user-flickor-li'>
                        <img className='flickor-logo' src='https://i.imgur.com/SpPAHbL.png' alt='' />
                        <NavLink exact to="/">flickor</NavLink>
                    </li>
                    <li id='your-photos'>
                        <NavLink to='/photos'>Your Photos</NavLink>
                    </li>
                    <li id='your-favs'>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                </ul>
                <ul id='user-right-nav'>
                    <li id='nav-upload-btn'>
                        <UploadButton />
                    </li>
                    <li id='profile-btn'>
                        <ProfileButton user={sessionUser} />
                    </li>
                </ul>
                {/* </div> */}
            </div>
        );
    } else {
        sessionLinks = (
            <div className='nav-bar'>
                <ul id='nav-bar-ul'>
                    <li id='nonuser-flickor-li'>
                        <img className='flickor-logo' src='https://i.imgur.com/SpPAHbL.png' alt='' />
                        <NavLink exact to="/">flickor</NavLink>
                    </li>
                    {location.pathname === '/' && (
                        < ul id='nonuser-btns'>
                            <li id='nav-login-li'>
                                <NavLink to="/login">Log In</NavLink>
                            </li>
                            <li id='nav-signup-li'>
                                <NavLink to="/signup">
                                    <button id='nav-signup-btn'>Sign Up</button>
                                </NavLink>
                            </li>
                        </ul>
                    )
                    }
                </ul>
            </div>
        );
    }

    return (
        // <div className='nav-bar'>
        //     <ul id='nav-bar-ul'>
        <>
            {isLoaded && sessionLinks}
        </>
        //     </ul>
        // </div>
    );
}

export default Navigation;

