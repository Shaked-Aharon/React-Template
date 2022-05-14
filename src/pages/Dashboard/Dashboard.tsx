import { useTranslation } from 'react-i18next';
import './Dashboard.scss';
export const Dashboard: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="dashboard">
            <h1>{t('DASHBOARD_PAGE.TITLE')}</h1>
            <p>{t('DASHBOARD_PAGE.HELLO', {fullName: 'Anonymous'})}</p>
        </div>
    )
}