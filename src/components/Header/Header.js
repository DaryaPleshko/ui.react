import { useState } from 'react';
import style from './Header.module.css';
import { http } from '../../hooks/http.hooks';
import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem'
import { auth } from '../../context/auth'

const Header = () => {
    const link = ['contact', 'En'];

    return (
        <header className={style['header']}>
            <h1 className={style['logo']}>Hschool</h1>

            <div className={style['header-buttons']}>

                <div className={style['nightmode']}>
                    <div className={style['switch']}></div>
                </div>

                <div className={style['flex']}>
                    {link.map((el, index) => <HeaderItem key={index} title={el} />)}
                </div>


                <Link to={'/login'}><div className={style['signup-button']}>Sign Up</div></Link>

                <Link to={'/register'}><div className={style['login-button']}>Login</div></Link>

            </div>
        </header>
    );

}

export default Header;