import { useEffect, useState } from "react";
import { BsFillPersonPlusFill, BsTrashFill, BsFillPencilFill } from "react-icons/bs";


import ModalBackgroundRegister from "../../components/ModalBackgroundRegister";
import ModalRegister from "../../components/ModalRegister";

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
	image: string;
	permission: string;
}


const Users = () => {
	const [listUsers, setListUsers] = useState<IUsersProps[]>([]);
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	const loadingUsers = async () => {
		const response: Response = await fetch("http://localhost:5500/users");
		const data: IUsersProps[] = await response.json();
		setListUsers(data);
	};


	const openUserRegistrationModal = () => {
		setIsOpenModal(true);
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


	return (
		<UsersContainer>
			{isOpenModal
				&& <ModalBackgroundRegister isOpenModal={isOpenModal}>
					<ModalRegister isOpenModal={isOpenModal} isChangeModal={setIsOpenModal} />
				</ModalBackgroundRegister>}

			<AddNewUser
				type="button"
				onClick={openUserRegistrationModal}
			>
				<BsFillPersonPlusFill size={18} />
				Adicionar Usuário
			</AddNewUser>

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
											{item.image ? <img src={item.image} alt={item.name} /> : <img src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image" alt="Sem imagem no perfil" />}
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
												<button>
													<BsFillPencilFill
														size={18}
														color="#0048ce"
													/>
												</button>
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


// {
// 	"id": "1",
// 	"name": "Naruto Uzumaki",
// 	"email": "naruto_uzumaki@konoha.kh",
// 	"password": "123456",
// 	"image": "https://i.postimg.cc/cCG799t4/naruto-39-1200x900.jpg",
// 	"permission": "Admin"
//   },
//   {
// 	"id": "2",
// 	"name": "Zabuza",
// 	"email": "zabuza@konoha.kh",
// 	"password": "abc123",
// 	"image": "https://i.postimg.cc/xT489kgL/ad5271fcd1e919482c6a8910a350fb49.jpg",
// 	"permission": "Admin"
//   },
//   {
// 	"id": "3",
// 	"name": "Sai Yamanaka",
// 	"email": "sai@konoha.kh",
// 	"password": "456",
// 	"image": "https://i.postimg.cc/J0ywxhJW/Sai.png",
// 	"permission": "Funcionário"
//   }