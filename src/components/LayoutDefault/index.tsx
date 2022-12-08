import { LayoutGrid } from "./styles";

import Aside from "../Aside";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

interface IBoxProps {
	children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const LayoutDefault: React.FC<IBoxProps> = ({ children }) => {

	return (
		<LayoutGrid>
			<Header />
			<Aside />
			<Content>
				{children}
			</Content>
			<Footer />
		</LayoutGrid>
	);
};


export default LayoutDefault;