import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../../../components/Button";
import InputDefault from "../../../components/InputDefault";
import SelectedDefault from "../../../components/SelectedDefault";

import { ButtonGroup, Container, Form, FormContainer } from "./styles";

import { BsArrowLeft } from "react-icons/bs";


const UpdateUser = () => {
	const { id } = useParams();

	const whitelist = ["Administração", "Funcionário"];


	async function loaderGetUser() {
		const response = await fetch(`http://localhost:5500/users/${id}`);
		const data = await response.json();
	}

	async function changePutUser() {
		const response = await fetch(`http://localhost:5500/users/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				password,
				permission,
				urlImage,
			})
		});
		return response;
	}
	

	const [name, setNome] = useState<string>();
	const [email, setEmail] = useState<string>("");
	const [permission, setPermission] = useState<string>("");
	const [urlImage, setUrlImage] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// Validando botão de cadastrar, caso estiver tudo preenchido o botão permite cadastrar usuário;
	const isFormValid = (name && email && password && permission);

	function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
		setNome(event.target.value);
	}

	function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value);
	}

	function handleChangeUrlImage(event: React.ChangeEvent<HTMLInputElement>) {
		setUrlImage(event.target.value);
	}

	function handleChangePermission(event: React.ChangeEvent<HTMLSelectElement>) {
		setPermission(event.target.value);
	}

	function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value);
	}

	function handleUpdateSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		changePutUser();
	}


	useEffect(() => {
		loaderGetUser();
	}, []);


	return (
		<Container>
			<Link to={"/usuarios"}>
				<span>
					<BsArrowLeft size={18} />
					Voltar
				</span>
			</Link>

			<Form noValidate onSubmit={handleUpdateSubmit}>
				<h2>Alterar dados</h2>

				<FormContainer>
					<InputDefault
						label="Nome"
						type="text"
						placeholder="Digite seu name"
						value={name}
						onChange={handleChangeName}
						required
					/>

					<InputDefault
						label="URL da imagem"
						type="url"
						placeholder="URL da sua imagem aqui..."
						value={urlImage}
						onChange={handleChangeUrlImage}
					/>

					<SelectedDefault
						label="Permissão"
						standardMessage="--Por favor escolha uma opção--"
						optionList={whitelist}
						value={permission}
						onChange={handleChangePermission}
						required
					/>

					<InputDefault
						label="E-mail"
						type="email"
						placeholder="Digite seu e-mail"
						value={email}
						onChange={handleChangeEmail}
						required
					/>
					<InputDefault
						label="Senha"
						type="text"
						placeholder="Digite sua senha"
						value={password}
						onChange={handleChangePassword}
						required
					/>

				</FormContainer>

				<ButtonGroup>
					<Button
						type="submit"
						disabled={!isFormValid}
					>
						Salvar as alterações
					</Button>
				</ButtonGroup>

			</Form>
		</Container>
	);
};


export default UpdateUser;