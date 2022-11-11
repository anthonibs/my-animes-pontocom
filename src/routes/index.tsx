import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./auth.routes";
import AppRoute from "./app.routes";

import { useAuth } from "../hooks/auth";


const Routes: React.FC = () => {

	const { logged } = useAuth();

	return (
		<BrowserRouter>
			{!logged ? <AppRoute /> : <AuthRoute />}
		</BrowserRouter>
	);
};

export default Routes;