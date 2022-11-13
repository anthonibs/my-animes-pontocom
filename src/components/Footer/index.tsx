import { FooterContainer, Container } from "./styles";

const Footer: React.FC = () => {

	const yearCopyright = new Date().getFullYear();

	return (
		<FooterContainer>
			<Container>
				<p>
					Copyrigth © {yearCopyright} - &ldquo;<span>O céu é muito vasto para a pessoa viver a vida sozinha!</span>&ldquo;
				</p>
				<p>
					Pontoanimes | betinha <span id="applicationVersion">1.0v</span>
				</p>
			</Container>
		</FooterContainer>
	);
};

export default Footer;