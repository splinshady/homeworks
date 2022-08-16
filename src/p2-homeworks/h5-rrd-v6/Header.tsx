import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import style from "./HW5.module.css";

function Header() {
    const [active, setActive] = useState<boolean>(false)

    const onClickHandler = () => {
        setActive(!active)
    }

    return (
        <div className={`${style.navigation}`}>
            <span onClick={onClickHandler} className={`${style.menu} ${active ? style.menu_active : ''}`}>

            </span>
            <div className={`${style.link_container}`}>
                <div className={`${style.links}  ${active ? style.active : ''}`}>
                    <NavLink className={style.link} to={'pre-junior'}>pre-junior </NavLink>
                    <NavLink className={style.link} to={'junior'}>junior </NavLink>
                    <NavLink className={style.link} to={'junior-plus'}>junior-plus</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
