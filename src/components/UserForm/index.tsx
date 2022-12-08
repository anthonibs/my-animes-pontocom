import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Fieldset from "../Fieldset";
import Input from "../Input";
import Label from "../Label";
import Selected from "../Selected";

import { ButtonContainer, Container, Form } from "./styles";

interface IUserForm {
	title: string;
	labelButtom: string;
	type?: "button" | "submit" | "reset" | undefined
}

const UserForm = ({ title, labelButtom, type = "button" }: IUserForm) => {
	const whitelist = ["Administração", "Funcionário"];

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [permission, setPermission] = useState<string>("");
	const [urlImage, setUrlImage] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { id } = useParams();

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


	function handleUpdate() {
		console.log("Atualizei meu users");

		fetch(`http://localhost:5500/users/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				password,
				permission,
				urlImage: null || urlImage,
			})
		}).then(response => {
			console.log(response);
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
		<Form>
			<h2>{title}</h2>

			<Container>
				<Fieldset>
					<Label>Nome</Label>
					<Input
						type="text"
						placeholder="Digite seu nome"
						value={name}
						onChange={handleChangeName}
						required
					/>
				</Fieldset>

				<Fieldset>
					<Label>URL Imagem</Label>
					<Input
						type="text"
						placeholder="URL da sua imagem aqui..."
						value={urlImage}
						onChange={handleChangeUrlImage}
						required
					/>
				</Fieldset>

				<Fieldset>
					<Label>Permissão</Label>
					<Selected onChange={handleChangePermission} defaultValue="DEFAULT">
						<option value="DEFAULT" disabled >-- Por favor escolha uma opção --</option>
						{whitelist.map((option: string) => (
							<option key={option} value={option}>{option}</option>
						))}
					</Selected>
				</Fieldset>

				<Fieldset>
					<Label>Email</Label>
					<Input
						type="email"
						placeholder="Digite seu email"
						value={email}
						onChange={handleChangeEmail}
						required
					/>
				</Fieldset>

				<Fieldset>
					<Label>Senha</Label>
					<Input
						type="text"
						placeholder="Digite sua senha"
						value={password}
						onChange={handleChangePassword}
						required
					/>
				</Fieldset>
			</Container>

			<ButtonContainer>
				<Button type={type} disabled={!isFormValid} onClick={handleUpdate}>
					{labelButtom}
				</Button>
			</ButtonContainer>
		</Form>
	);
};

export default UserForm;