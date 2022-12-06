import { Route, Routes } from "react-router-dom";
import LayoutDefault from "../components/LayoutDefault";
import Animes from "../pages/Animes";
import Dashboard from "../pages/Dashboard/Index";
import NaoEncontrado from "../pages/NaoEncontrado";
import NewUser from "../pages/Users/NewUser";
import UpdateUser from "../pages/Users/UpdateUser";
import Users from "../pages/Users";

const AppRoutes = () => {

	return (
		<LayoutDefault>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="animes" element={<Animes />} />
				<Route path="usuarios" element={<Users />} />
				<Route path="usuarios/novo" element={<NewUser />} />
				<Route path="usuarios/editar/:id" element={<UpdateUser />} />
				<Route path="*" element={<NaoEncontrado />} />
			</Routes>
		</LayoutDefault >);
};


export default AppRoutes;