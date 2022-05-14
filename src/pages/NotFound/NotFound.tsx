import { useTranslation } from 'react-i18next';
import './NotFound.scss';
const NotFound: React.FC = () => {
	const {t} = useTranslation();
	return (
		<>
			<div className="not-found">
                <h1>404</h1>{t('NOTFOUND_PAGE.TITLE')}
			</div>
		</>
	);
};

export default NotFound;
