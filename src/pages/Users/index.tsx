import { memo, useEffect, useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";


import ModalBackgroundRegister from "../../components/ModalBackgroundRegister";
import ModalRegister from "../../components/ModalRegister";

import {
	UsersContainer,
	AddNewUser,
} from "./styles";

interface IUsersProps {
	id: string;
	name: string;
	email: string;
	password: string;
	image: string;
	permission: string;
}

const Users = () => {

	const [listUsers, setListUsers] = useState<IUsersProps[]>([]);

	const loadingUsers = async () => {
		const response: Response = await fetch("http://localhost:5500/users");
		const data = await response.json();
		setListUsers(data);
	};

	const openUserRegistrationModal = () => {
		console.log("Abrir Modal de Cadastro!");
	};

	useEffect(() => {
		loadingUsers();
	}, []);

	return (
		<UsersContainer>

			<ModalBackgroundRegister>
				<ModalRegister />
			</ModalBackgroundRegister>

			<AddNewUser
				type="button"
				onClick={openUserRegistrationModal}
			>
				<BsFillPersonPlusFill size={18} />
				Adicionar Usuário
			</AddNewUser>


			<br />
			<br />

			<h2>Lista de Usuários:</h2>

			{listUsers.length != 0
				&& listUsers.map((item: IUsersProps) => {
					return (
						<ul key={item.id}>
							<li>
								<div>UID: <span>{item.id}</span></div>
								<div>Nome: <span>{item.name}</span></div>
								<div>E-mail: <span>{item.email}</span></div>
								<div>Imagem: <span>{item.image}</span></div>
								<div>Acesso: <span>{item.permission}</span></div>
							</li>
						</ul>
					);
				})
			}


		</UsersContainer>
	);
};


export default memo(Users);