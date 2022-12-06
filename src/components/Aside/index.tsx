import {
	AsideContainer,
	Navbar,
	LogoContainer,
	Logo,
	MenuIcon
} from "./styles";

import LogoAnimesGrande from "../../assets/svg/logo-ponto-animes-admin-01.svg";
import LogoAnimesCurto from "../../assets/svg/logo-ponto-animes-admin-02.svg";
import { NavLink } from "react-router-dom";

import { BsArrowBarLeft, BsArrowBarRight, BsCollectionPlayFill, BsFileEarmarkImageFill, BsFileEarmarkPlayFill, BsFileEarmarkTextFill, BsFillDiagram3Fill, BsInfoLg, BsLayersFill } from "react-icons/bs";
import { useState } from "react";



const Aside: React.FC = () => {

	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);

	const openAndCloseMenu = () => {
		if (!isOpenMenu) setIsOpenMenu(true);
		if (isOpenMenu) setIsOpenMenu(false);
	};


	return (
		<AsideContainer>
			<LogoContainer>
				<Logo src={isOpenMenu === true ? LogoAnimesGrande : LogoAnimesCurto} alt="Logo da Área do Administrador" />
			</LogoContainer>

			<MenuIcon onClick={openAndCloseMenu}>
				{isOpenMenu ? <BsArrowBarLeft size={28} className="iconColor" /> : <BsArrowBarRight size={28} className="iconColor" />}
			</MenuIcon>

			<Navbar>
				<NavLink
					to={"/"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsLayersFill />
					<span className={!isOpenMenu ? "hide" : ""}>Painel de Controle</span>
				</NavLink>

				<NavLink
					to={"lista-animes"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsCollectionPlayFill />
					<span className={!isOpenMenu ? "hide" : ""}>Lista de Animes</span>
				</NavLink>

				<NavLink
					to={"slider"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsFileEarmarkImageFill />
					<span className={!isOpenMenu ? "hide" : ""}>Gerenciador de Slider</span>
				</NavLink>

				<NavLink
					to={"animes"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsFileEarmarkPlayFill />
					<span className={!isOpenMenu ? "hide" : ""}>Gerenciador de Animes</span>
				</NavLink>

				<NavLink
					to={"noticia"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsFileEarmarkTextFill />
					<span className={!isOpenMenu ? "hide" : ""}>Notícias</span>
				</NavLink>

				<NavLink
					to={"usuarios"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsFillDiagram3Fill />
					<span className={!isOpenMenu ? "hide" : ""}>Usuários</span>
				</NavLink>

				<NavLink
					to={"informacao"}
					className={({ isActive }) => (isActive ? "isActiveLink" : "")}
				>
					<BsInfoLg />
					<span className={!isOpenMenu ? "hide" : ""}>Informações</span>
				</NavLink >

			</Navbar >
		</AsideContainer >
	);
};

export default Aside;