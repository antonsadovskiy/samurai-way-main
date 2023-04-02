import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

const Header: FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.headerContainer}>
            <h3>всенаместе</h3>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <span>{props.login}</span>
                        </div>
                        : <NavLink to={'/login'} className={s.login}>
                            Log in
                            Log out
                        </NavLink>
                }
            </div>
        </div>
    );
}

export default Header;