import { useState } from "react";
import Button from "../Button";
import InputDefault from "../InputDefault";
import SelectedDefault from "../SelectedDefault";
import { ButtonGroup, Modal, ModalContainer } from "./styles";

interface IModalRegisterProps {
	isOpenModal: boolean;
	isChangeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRegister = ({ isOpenModal, isChangeModal }: IModalRegisterProps) => {

	const whitelist = ["Admin", "Funcionário"];

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [permission, setPermission] = useState("");

	// Gera um ID aleatório
	const hashID = `E-${(Math.random() * 100).toString(16).slice(12)}-${(Math.random() * 2).toString(16).toLocaleUpperCase().slice(8)}-${Math.floor(Date.now() * Math.random()).toString(36).slice(5)}`;
	const user = {
		id: hashID,
		name: name,
		email: email,
		password: password,
		permission: permission,
		image: ""
	};


	const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetchData();
	};

	const handleClosed = () => {
		isChangeModal(false);
	};


	const fetchData = () => {
		fetch("http://localhost:5500/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		})
			.then(response => {
				if (response.ok) {
					
					response.json();
					handleClosed();
				} else {
					alert("Erro ao enviar o cadastro.");
				}
			})
			.then(dados => dados)
			.catch(err => console.log(err));
	};


	return (
		<Modal isOpenModal={isOpenModal} onSubmit={handleAddUser}>
			<h2>Cadastrar novo usuário</h2>

			<ModalContainer>
				<InputDefault
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					required
				/>
				<SelectedDefault
					label="Permissão"
					standardMessage="--Por favor escolha uma opção--"
					optionList={whitelist}
					value={permission}
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPermission(e.target.value)}
				/>

				<InputDefault
					label="E-mail"
					type="email"
					placeholder="Digite seu e-mail"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					required
				/>
				<InputDefault
					label="Senha"
					type="text"
					placeholder="Digite sua senha"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					required
				/>

			</ModalContainer>

			<ButtonGroup>
				<Button backgroundColor="#FD9900" handleModal={handleClosed} type="button"  >
					Cancelar
				</Button>
				<Button type="submit" >
					Salvar
				</Button>
			</ButtonGroup>

		</Modal>
	);
};

export default ModalRegister;