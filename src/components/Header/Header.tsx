import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutUser: () => void
}

const Header: FC<HeaderPropsType> = (props) => {

    const onClickLogOutHandler = () => {
        props.logoutUser()
    }

    return (
        <div className={s.headerContainer}>
            <h3>всенаместе</h3>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div className={s.authorisedUser}>
                            <div>{props.login}</div>
                            <button onClick={onClickLogOutHandler}>Log out</button>
                        </div>
                        : <NavLink to={'/login'} className={s.notAuthorisedUser}>
                            Log in
                        </NavLink>
                }
            </div>
        </div>
    );
}

export default Header;