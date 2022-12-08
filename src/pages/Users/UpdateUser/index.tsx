import { Link, useParams } from "react-router-dom";

import { Container } from "./styles";

import { BsArrowLeft } from "react-icons/bs";
import UserForm from "../../../components/UserForm";


const UpdateUser = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<Container>
			<Link to={"/usuarios"}>
				<span>
					<BsArrowLeft size={18} />
					Voltar
				</span>
			</Link>

			<UserForm title="Atualizar dados" labelButtom="Atualizar" type="button"/>
		</Container>
	);
};


export default UpdateUser;