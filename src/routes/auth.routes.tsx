import { Routes, Route } from "react-router-dom";


import AdminLogin from "../pages/Admin";


const AuthRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<AdminLogin />} />
	</Routes>
);

export default AuthRoutes;