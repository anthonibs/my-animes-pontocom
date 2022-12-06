import { ButtonCustom } from "./styles";

interface IButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	backgroundColor?: string;
	handleChange?: () => void;
	type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, disabled, backgroundColor, handleChange, type }: IButtonProps) => {
	return (
		<ButtonCustom type={type} disabled={disabled} backgroundColor={backgroundColor} onClick={handleChange}>
			{children}
		</ButtonCustom>
	);
};


export default Button;