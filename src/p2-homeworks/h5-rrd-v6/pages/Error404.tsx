import React from 'react'
import style from '../HW5.module.css'
import error_img from './bgc_error.png'


function Error404() {
    return (
        <div className={style.error_page}>
            <img className={style.error_page__img} src={error_img} alt="404 error"/>
            <div className={style.error_page__title}>
                <p className={style.error_page__404}>404</p>
                <p className={style.error_page__about}>Page not found!</p>
                <p className={style.error_page__about}>ฅ/ᐠ.̫ .ᐟ\ฅ</p>
            </div>
        </div>
    )
}

export default Error404
