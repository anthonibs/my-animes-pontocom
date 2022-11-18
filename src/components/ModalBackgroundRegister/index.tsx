
import { ModalContainer } from "./styles";

interface IModalBgRegister {
	children: React.ReactNode;
}

const ModalBackgroundRegister = ({ children }: IModalBgRegister) => {
	return (
		<ModalContainer>
			{children}
		</ModalContainer>
	);
};

export default ModalBackgroundRegister;