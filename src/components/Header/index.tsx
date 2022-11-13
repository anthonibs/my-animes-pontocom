import {
	HeaderContainer,
	Container,
	BoxProfile,
	Notification,
	Profile,
	ConfigurationGroup,
	IconBox,
} from "./styles";

import { BsBellFill, BsBellSlashFill, BsFillQuestionCircleFill, BsGearFill, BsBoxArrowInRight } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";

const Header: React.FC = () => {

	// Deslogar a conta
	const { signOut } = useAuth();

	return (
		<HeaderContainer>
			<Container>


				<BoxProfile>
					<Notification>
						<BsBellFill size={18} className="iconColor" />
						<span>99+</span>
					</Notification>
					<Profile>
						<img src="https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo" alt="Imagem do usuário" />
						<span>Naruto Uzumaki</span>
					</Profile>
					<ConfigurationGroup>
						<IconBox>
							<BsGearFill size={18} className="iconColor" />
						</IconBox>
						<IconBox>
							<BsFillQuestionCircleFill size={18} className="iconColor" />
						</IconBox>
						<IconBox onClick={signOut}>
							<BsBoxArrowInRight size={18} className="iconColor" />
						</IconBox>
					</ConfigurationGroup>
				</BoxProfile>
			</Container>
		</HeaderContainer>
	);
};

export default Header;