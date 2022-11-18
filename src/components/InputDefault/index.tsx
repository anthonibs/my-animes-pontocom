import {

} from "./styles";


interface IProps {
	label: string;
	type: string;
	placeholder: string;
	required: boolean;
	tamanho: string;
}

const InputDefault = ({ label, type, placeholder, required, tamanho }: IProps) => {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input
				id={label}
				type={type}
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
};

export default InputDefault;