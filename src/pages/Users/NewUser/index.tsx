import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import InputDefault from "../../../components/InputDefault";
import SelectedDefault from "../../../components/SelectedDefault";

import { ButtonGroup, Container, Form, FormContainer } from "./styles";

import { BsArrowLeft } from "react-icons/bs";

const NewUser = () => {

	const whitelist = ["Administração", "Funcionário"];

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [permission, setPermission] = useState<string>("");
	const [urlImage, setUrlImage] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// Validando botão de cadastrar, caso estiver tudo preenchido o botão permite cadastrar usuário;
	const isFormValid = (name && email && password);

	function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value);
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


	function handleSubmitUser(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log("Usuário Cadastrado com Sucesso!!");
		// Gera um ID aleatório
		const hashID = `E-${(Math.random() * 100).toString(16).slice(12)}-${(Math.random() * 2).toString(16).toLocaleUpperCase().slice(8)}-${Math.floor(Date.now() * Math.random()).toString(36).slice(5)}`;

		fetch("http://localhost:5500/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: hashID,
				name,
				email,
				password,
				permission,
				urlImage: null || urlImage,
			})
		}).then(response => {
			if (response.status === 404) {
				// Fazer depois modal para avisar o erro para usuário;
				alert("Error");
			}

			if (response.ok) {
				setName("");
				setEmail("");
				setUrlImage("");
				setPermission("");
				setPassword("");

				return response.json();
			}
		}).then(dados => dados)
			.catch(error => console.log("Erro corrigir: ", error));
	}



	return (
		<Container>
			<Link to={"/usuarios"}>
				<span>
					<BsArrowLeft size={18} />
					Voltar
				</span>
			</Link>

			<Form noValidate onSubmit={handleSubmitUser}>
				<h2>Cadastrar usuário</h2>

				<FormContainer>
					<InputDefault
						label="Nome"
						type="text"
						placeholder="Digite seu nome"
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
						Cadastrar
					</Button>
				</ButtonGroup>

			</Form>
		</Container>
	);
};


export default NewUser;