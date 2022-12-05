
import { ModalContainer } from "./styles";

interface IModalBgRegister {
	children: React.ReactNode;
	isOpenModal: boolean;
}

const ModalBackgroundRegister = ({ children, isOpenModal }: IModalBgRegister) => {
	return (
		<ModalContainer isOpenModal={isOpenModal}>
			{children}
		</ModalContainer>
	);
};

export default ModalBackgroundRegister;