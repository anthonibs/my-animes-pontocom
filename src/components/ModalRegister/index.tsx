
import InputDefault from "../InputDefault";
import { Modal, ModalContainer } from "./styles";



const ModalRegister = () => {
	return (
		<Modal>
			<h2>Cadastrar novo usuário</h2>

			<ModalContainer>
				<InputDefault
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					required
					tamanho="48%"
				/>
				<InputDefault
					label="Permissão"
					type="text"
					placeholder="Digite seu nome"
					required
					tamanho="48%"
				/>
				<InputDefault
					label="E-mail"
					type="email"
					placeholder="Digite seu e-mail"
					required
					tamanho="48%"
				/>
				<InputDefault
					label="Senha"
					type="text"
					placeholder="Digite sua senha"
					required
					tamanho="48%"
				/>
			</ModalContainer>
		</Modal>
	);
};

export default ModalRegister;