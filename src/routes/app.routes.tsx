import { Route, Routes } from "react-router-dom";
import Anime from "../pages/Anime";
import Dashboard from "../pages/Dashboard/Index";

const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Dashboard />} />
		<Route path="/anime" element={<Anime />} />
	</Routes>
);


export default AppRoutes;