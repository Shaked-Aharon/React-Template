import { useTranslation } from "react-i18next";
import './Landing.scss';
const Landing: React.FC = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<div className="landing">
				<h1>{t('LANDING_PAGE.TITLE')}</h1>
			</div>
		</>
	);
};

export default Landing;
