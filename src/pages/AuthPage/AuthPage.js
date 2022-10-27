import Authoriz from "../../components/Authoriz/Authoriz";
import style from './AuthPage.module.css';

const AuthPage = () => {

    return (
        <div className={style['auth-page']}>
            <Authoriz />
        </div>
    );

}
export default AuthPage;    