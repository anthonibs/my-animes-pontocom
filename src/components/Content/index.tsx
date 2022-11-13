import { MainContainer } from "./styles";

interface BoxProps {
	children: React.ReactNode; // 👈️ type children
}

// eslint-disable-next-line react/prop-types
const Content: React.FC<BoxProps> = ({ children }) => {
	return (
		<MainContainer>
			{children}
		</MainContainer>
	);
};

export default Content;