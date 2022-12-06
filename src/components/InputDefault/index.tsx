import { InputContainer } from "./styles";


interface IProps {
	label: string;
	type?: string;
	placeholder: string;
	required?: boolean;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputDefault = ({
	label,
	type,
	placeholder,
	required,
	value,
	onChange }: IProps) => {

	return (
		<InputContainer>
			<label htmlFor={label}>{label}</label>
			<input
				id={`input-${label.toLowerCase()}`}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</InputContainer>
	);
};

export default InputDefault;