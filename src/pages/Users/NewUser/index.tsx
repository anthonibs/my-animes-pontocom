import { Link } from "react-router-dom";
import { Container } from "./styles";

import UserForm from "../../../components/UserForm";

import { BsArrowLeft } from "react-icons/bs";

const NewUser = () => {
	return (
		<Container>
			<Link to={"/usuarios"}>
				<span>
					<BsArrowLeft size={18} />
					Voltar
				</span>
			</Link>

			<UserForm
				type="submit"
				title="Cadastrar usuário"
				labelButtom="Cadastrar"
			/>
		</Container>
	);
};


export default NewUser;