import { FieldsetGroup } from "./styles";

interface IChildren {
	children: React.ReactNode
}

const Fieldset = ({ children }: IChildren) => {
	return (
		<FieldsetGroup>
			{children}
		</FieldsetGroup>
	);
};


export default Fieldset;