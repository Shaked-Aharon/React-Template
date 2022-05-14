import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useThemeProvider } from "../../providers/Theme.provider";
import "./Header.scss";


const Header: React.FC = () => {

	const { t, i18n } = useTranslation();
	const {theme, setTheme} = useThemeProvider();

	function changeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<nav>
			<span>{t('HEADER.BRAND')}</span>
			<ul>
				<li>
					<Link to="dashboard">{t('HEADER.MENU.DASHBOARD')}</Link>
				</li>
				<li>
					<Link to="lists">{t('HEADER.MENU.LISTS')}</Link>
				</li>
			</ul>
			<span className="spacer"></span>
			<label className="theme-toggler">
				<input checked={theme === 'dark'} onChange={e => { const selectedTheme = e.target.checked ? 'dark' : 'light'; setTheme(selectedTheme)}} type="checkbox" /> 
				{t('HEADER.THEME_TOGGLER')}
			</label>
			<div className="select">
				<select className="lang-input" value={i18n.language} name="" id="" onChange={e => changeLang(e.target.value)}>
					<option value="en">EN</option>
					<option value="he">HE</option>
				</select>
				<span className="focus"></span>
			</div>
		</nav>
	);
};
export default Header;