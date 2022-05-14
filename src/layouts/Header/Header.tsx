import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useThemeProvider } from "../../providers/Theme.provider";
import "./Header.scss";


const Header: React.FC<any> = ({children}) => {

	const { t, i18n } = useTranslation();
	const {setTheme} = useThemeProvider();
	const selectInp = useRef({} as HTMLSelectElement);
	selectInp.current.value = i18n.language;

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
				<input onChange={e => { const selectedTheme = e.target.checked ? 'dark' : 'light'; setTheme(selectedTheme)}} type="checkbox" /> 
				{t('HEADER.THEME_TOGGLER')}
			</label>
			<select ref={selectInp} name="" id="" onChange={e => changeLang(e.target.value)}>
				<option value="en">EN</option>
				<option value="he">HE</option>
			</select>
		</nav>
	);
};
export default Header;