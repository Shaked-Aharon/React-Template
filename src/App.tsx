import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { ERouteGuards, GuardedRoute } from "./util/GuardedRoute";
import './app.scss'
import { useThemeProvider } from "./providers/Theme.provider";

const App: React.FC = () => {

	const {theme} = useThemeProvider();
	const {i18n} = useTranslation();

	return (
		<div className="app" data-theme={theme} data-lang={i18n.language}>
			<BrowserRouter>
				<Header></Header>
				<Main>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="login" element={<Login />} />
						<Route path="dashboard" element={<GuardedRoute guard={ERouteGuards.Auth} element={<Dashboard />} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Main>
			</BrowserRouter>
		</div>
	);
};
export default App;