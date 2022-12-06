import { useEffect, useState } from "react";
import { BsFillPersonPlusFill, BsTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import imageDefault from "../../assets/image/sem-imagem-padrao.png";


import {
	UsersContainer,
	AddNewUser,
	TableContainer,
	TableHead,
	TableRow,
	TableBodyRow,
	TableHeadColumn,
	TableBody,
	TableBodyColumn,
	Container
} from "./styles";


interface IUsersProps {
	id: string;
	name: string;
	email: string;
	password: string;
	urlImage: string;
	permission: string;
}


const Users = () => {
	const [listUsers, setListUsers] = useState<IUsersProps[]>([]);

	const loadingUsers = async () => {
		const response: Response = await fetch("http://localhost:5500/users");
		const data: IUsersProps[] = await response.json();
		setListUsers(data);
	};


	const handleRemoveUser = async (idRemove: string) => {
		const response: Response = await fetch(`http://localhost:5500/users/${idRemove}`, {
			method: "DELETE"
		});
		return response;
	};


	useEffect(() => {
		loadingUsers();
	}, []);

	console.log(listUsers);

	return (
		<UsersContainer>

			<Link to="novo">
				<AddNewUser>
					<BsFillPersonPlusFill size={18} />
					Adicionar UsuárioS
				</AddNewUser>
			</Link>

			<h2>Lista de Usuários:</h2>

			<Container>
				{listUsers.length !== 0
					&& <TableContainer>
						<TableHead>
							<TableRow>
								<TableHeadColumn>
									Perfil
								</TableHeadColumn>
								<TableHeadColumn>
									Nome
								</TableHeadColumn>
								<TableHeadColumn>
									Email
								</TableHeadColumn>
								<TableHeadColumn>
									Senha
								</TableHeadColumn>
								<TableHeadColumn>
									Nro
								</TableHeadColumn>
								<TableHeadColumn>
									Permissão
								</TableHeadColumn>
								<TableHeadColumn>
									Ações
								</TableHeadColumn>
							</TableRow>
						</TableHead>
						<TableBody>
							{listUsers.map((item, index) => {
								return (
									<TableBodyRow key={item.id}>
										<TableBodyColumn>
											{item.urlImage ? <img src={item.urlImage} alt={item.name} /> : <img src={imageDefault} alt="Sem imagem no perfil" />}
										</TableBodyColumn>
										<TableBodyColumn>
											{item.name}
										</TableBodyColumn>
										<TableBodyColumn>
											{item.email}
										</TableBodyColumn>
										<TableBodyColumn>
											{item.password}
										</TableBodyColumn>
										<TableBodyColumn className="center">
											{index + 1}
										</TableBodyColumn>
										<TableBodyColumn className="center">
											{item.permission}
										</TableBodyColumn>
										<TableBodyColumn>
											<div>
												<button onClick={() => handleRemoveUser(item.id)}>
													<BsTrashFill
														size={18}
														color="#cf0707"
													/>
												</button>
												<Link to={`editar/${item.id}`}>
													<BsFillPencilFill
														size={18}
														color="#0048ce"
													/>
												</Link>
											</div>
										</TableBodyColumn>
									</TableBodyRow>
								);
							})}
						</TableBody>
					</TableContainer>}
			</Container>
		</UsersContainer >
	);
};


export default Users;
