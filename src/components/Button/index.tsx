import { ButtonCustom } from "./styles";

interface IButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	backgroundColor?: string;
	handleModal?: () => void;
	type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, disabled, backgroundColor, handleModal, type }: IButtonProps) => {
	return (
		<ButtonCustom type={type} disabled={disabled} backgroundColor={backgroundColor} onClick={handleModal}>
			{children}
		</ButtonCustom>
	);
};


export default Button;