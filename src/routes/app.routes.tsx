import { Route, Routes } from "react-router-dom";
import LayoutDefault from "../components/LayoutDefault";
import Animes from "../pages/Animes";
import Dashboard from "../pages/Dashboard/Index";
import NaoEncontrado from "../pages/NaoEncontrado";
import Users from "../pages/Users";

const AppRoutes = () => {
	
	return (
		<LayoutDefault>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="animes" element={<Animes />} />
				<Route path="usuarios" element={<Users />} />
				<Route path="*" element={<NaoEncontrado />} />
			</Routes>
		</LayoutDefault >);
};


export default AppRoutes;