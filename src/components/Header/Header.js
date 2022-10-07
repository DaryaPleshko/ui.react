import style from './Header.module.css';
import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem'
import { auth } from '../../context/auth'

const Header = () => {
    const link = ['contact', 'language'];

    return (
        <header className={style['header']}>
            <h1 className={style['logo']}>Hschool</h1>
            <div className={style['header-buttons']}>
            <div className={style['header-nightmode']}></div>
                <div className={style['flex']}>
                    {link.map((el, index) => <HeaderItem key={index} title={el} />)}
                </div>
                <Link to={'/register'}><div className={style['signup-button']}>Sign In</div></Link>
            </div>
        </header>
    );

}

export default Header;