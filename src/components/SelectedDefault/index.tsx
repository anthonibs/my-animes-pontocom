import { SelectedContainer } from "./styles";

interface ISelectedProps {
	label: string;
	standardMessage: string;
	optionList: string[];
	value: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectedDefault = ({ label, standardMessage, optionList, value, onChange }: ISelectedProps) => {
	return (
		<SelectedContainer>
			<label htmlFor={label}>{label}</label>
			<select name={label} id={label} value={value} onChange={onChange}>
				<option value="">{standardMessage}</option>
				{optionList.map((option: string) => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		</SelectedContainer >
	);
};


export default SelectedDefault;