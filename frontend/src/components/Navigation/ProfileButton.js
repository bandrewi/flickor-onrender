import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            {/* <div id='profile-btn'> */}
            {/* <button onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button> */}
            {!showMenu && (
                <p id='profile-icon-unclicked' onClick={openMenu}>
                    <img id='profile-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04MC42MjUsMTAuNzVjLTM4LjUwNjgzLDAgLTY5Ljg3NSwzMS4zNjgxNyAtNjkuODc1LDY5Ljg3NWMwLDM4LjUwNjgzIDMxLjM2ODE3LDY5Ljg3NSA2OS44NzUsNjkuODc1YzM4LjUwNjgzLDAgNjkuODc1LC0zMS4zNjgxNyA2OS44NzUsLTY5Ljg3NWMwLC0zOC41MDY4MyAtMzEuMzY4MTcsLTY5Ljg3NSAtNjkuODc1LC02OS44NzV6TTgwLjYyNSwyMS41YzMyLjcxMTkyLDAgNTkuMTI1LDI2LjQxMzA4IDU5LjEyNSw1OS4xMjVjMCwxNC40MDMzMiAtNS4xMjMwNCwyNy41NDY4OCAtMTMuNjA1NDcsMzcuNzkyOTdjLTQuNjE5MTQsLTEzLjEwMTU2IC0xNC42MTMyOCwtMjMuNjQxNiAtMjcuMzc4OTEsLTI4Ljg0ODY0YzUuMzMzMDEsLTQuOTEzMDggOC43MzQzOCwtMTEuOTI1NzggOC43MzQzOCwtMTkuNjk0MzNjMCwtMTQuNzgxMjUgLTEyLjA5Mzc1LC0yNi44NzUgLTI2Ljg3NSwtMjYuODc1Yy0xNC43ODEyNSwwIC0yNi44NzUsMTIuMDkzNzUgLTI2Ljg3NSwyNi44NzVjMCw3Ljc2ODU1IDMuNDAxMzYsMTQuNzgxMjUgOC43MzQzOCwxOS42OTQzM2MtMTIuNzY1NjIsNS4yMDcwMyAtMjIuNzE3NzcsMTUuNzQ3MDcgLTI3LjMzNjkyLDI4Ljg0ODY0Yy04LjUyNDQxLC0xMC4yNDYwOSAtMTMuNjQ3NDYsLTIzLjM4OTY1IC0xMy42NDc0NiwtMzcuNzkyOTdjMCwtMzIuNzExOTIgMjYuNDEzMDgsLTU5LjEyNSA1OS4xMjUsLTU5LjEyNXpNODAuNjI1LDUzLjc1YzguOTg2MzMsMCAxNi4xMjUsNy4xMzg2OCAxNi4xMjUsMTYuMTI1YzAsOC45ODYzMyAtNy4xMzg2NywxNi4xMjUgLTE2LjEyNSwxNi4xMjVjLTguOTg2MzIsMCAtMTYuMTI1LC03LjEzODY3IC0xNi4xMjUsLTE2LjEyNWMwLC04Ljk4NjMyIDcuMTM4NjgsLTE2LjEyNSAxNi4xMjUsLTE2LjEyNXpNODAuNjI1LDk2Ljc1YzE4LjI2NjYsMCAzMy4yNTc4MSwxMi45NzU1OCAzNi43NDMxNywzMC4xOTIzOWMtMTAuMTIwMTEsOC4wMjA1MSAtMjIuODQzNzUsMTIuODA3NjEgLTM2Ljc0MzE3LDEyLjgwNzYxYy0xMy44OTk0MiwwIC0yNi42MjMwNCwtNC43ODcxIC0zNi43MDExNywtMTIuODA3NjFjMy40NDMzNSwtMTcuMjE2OCAxOC40MzQ1NiwtMzAuMTkyMzkgMzYuNzAxMTcsLTMwLjE5MjM5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' alt="" />
                </p>
            )}

            {showMenu && (
                <>
                    <p id='profile-icon-clicked' onClick={openMenu}>
                        <img id='profile-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04MC42MjUsMTAuNzVjLTM4LjUwNjgzLDAgLTY5Ljg3NSwzMS4zNjgxNyAtNjkuODc1LDY5Ljg3NWMwLDM4LjUwNjgzIDMxLjM2ODE3LDY5Ljg3NSA2OS44NzUsNjkuODc1YzM4LjUwNjgzLDAgNjkuODc1LC0zMS4zNjgxNyA2OS44NzUsLTY5Ljg3NWMwLC0zOC41MDY4MyAtMzEuMzY4MTcsLTY5Ljg3NSAtNjkuODc1LC02OS44NzV6TTgwLjYyNSwyMS41YzMyLjcxMTkyLDAgNTkuMTI1LDI2LjQxMzA4IDU5LjEyNSw1OS4xMjVjMCwxNC40MDMzMiAtNS4xMjMwNCwyNy41NDY4OCAtMTMuNjA1NDcsMzcuNzkyOTdjLTQuNjE5MTQsLTEzLjEwMTU2IC0xNC42MTMyOCwtMjMuNjQxNiAtMjcuMzc4OTEsLTI4Ljg0ODY0YzUuMzMzMDEsLTQuOTEzMDggOC43MzQzOCwtMTEuOTI1NzggOC43MzQzOCwtMTkuNjk0MzNjMCwtMTQuNzgxMjUgLTEyLjA5Mzc1LC0yNi44NzUgLTI2Ljg3NSwtMjYuODc1Yy0xNC43ODEyNSwwIC0yNi44NzUsMTIuMDkzNzUgLTI2Ljg3NSwyNi44NzVjMCw3Ljc2ODU1IDMuNDAxMzYsMTQuNzgxMjUgOC43MzQzOCwxOS42OTQzM2MtMTIuNzY1NjIsNS4yMDcwMyAtMjIuNzE3NzcsMTUuNzQ3MDcgLTI3LjMzNjkyLDI4Ljg0ODY0Yy04LjUyNDQxLC0xMC4yNDYwOSAtMTMuNjQ3NDYsLTIzLjM4OTY1IC0xMy42NDc0NiwtMzcuNzkyOTdjMCwtMzIuNzExOTIgMjYuNDEzMDgsLTU5LjEyNSA1OS4xMjUsLTU5LjEyNXpNODAuNjI1LDUzLjc1YzguOTg2MzMsMCAxNi4xMjUsNy4xMzg2OCAxNi4xMjUsMTYuMTI1YzAsOC45ODYzMyAtNy4xMzg2NywxNi4xMjUgLTE2LjEyNSwxNi4xMjVjLTguOTg2MzIsMCAtMTYuMTI1LC03LjEzODY3IC0xNi4xMjUsLTE2LjEyNWMwLC04Ljk4NjMyIDcuMTM4NjgsLTE2LjEyNSAxNi4xMjUsLTE2LjEyNXpNODAuNjI1LDk2Ljc1YzE4LjI2NjYsMCAzMy4yNTc4MSwxMi45NzU1OCAzNi43NDMxNywzMC4xOTIzOWMtMTAuMTIwMTEsOC4wMjA1MSAtMjIuODQzNzUsMTIuODA3NjEgLTM2Ljc0MzE3LDEyLjgwNzYxYy0xMy44OTk0MiwwIC0yNi42MjMwNCwtNC43ODcxIC0zNi43MDExNywtMTIuODA3NjFjMy40NDMzNSwtMTcuMjE2OCAxOC40MzQ1NiwtMzAuMTkyMzkgMzYuNzAxMTcsLTMwLjE5MjM5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' alt="" />
                    </p>
                    <ul className="profile-dropdown">
                        <li id='profile-username'>Hi {user.username}</li>
                        {/* <li>{user.email}</li> */}
                        <li id='logout-btn'>
                            <button onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </>
            )}

            {/* </div> */}
        </>
    );
}

export default ProfileButton;