import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../providers/Auth.provider";
import "./Login.scss";
const Login: React.FC = () => {
	const {t} = useTranslation();
    const {user, setUser} = useUserProvider();
	const navigate = useNavigate();

	function login(){
		setUser('test');
		navigate("/dashboard", { replace: true });
	}

	return (
		<div className='login-container'>

			<div className='visual-div'>
				<h1>{t('LOGIN_PAGE.TITLE')}</h1>
           		<button onClick={login}>{t('LOGIN_PAGE.BUTTON')}</button>
			</div>

			<div className='login'>
				<span className='page-text'> {t('GENERAL.EMAIL')}: </span>
				<span className='email-input'>  <input type="text" /> </span>
				<span className='page-text'> {t('GENERAL.PASSWORD')}: </span>
				<span className='password-input'>  <input type="password" /> </span>
				<span className='signin-btn'> <button id='sign-In-Btn' >{t('LOGIN_PAGE.BUTTON')}</button> </span>

				<span className='password-recovery'> {t('LOGIN_PAGE.FORGOT_PASSWORD')} <a href="">{t('GENERAL.CLICK_HERE')}</a> </span>
				<span className='signup'> {t('LOGIN_PAGE.DONT_HAVE_ACCOUNT')} <a href="">{t('LOGIN_PAGE.REGISTER')}</a> </span>
			</div>
   		</div>
	);
};

export default Login