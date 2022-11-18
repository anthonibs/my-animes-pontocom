import {
	AdminContainer,
	HeaderLogin,
	TitleHeader,
	HeaderWrapper,
	MainLogin,
	FooterLogin,
	ContainerForm,
	BackgroundImage,
	LoginForm
} from "./styles";

import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import { useState } from "react";

import LogoAdmin from "../../assets/logo-ponto-animes-admin-01.svg";
import { useAuth } from "../../hooks/auth";



const Admin = () => {

	const [displayPassword, setDisplayPassword] = useState({
		changeIcon: false,
		type: "password"
	});

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const { signIn } = useAuth();



	// Exibe e esconde a senha na tela do usuário;
	const handlerShowHidden = (): void => {
		if (displayPassword.changeIcon !== true) {
			setDisplayPassword({
				changeIcon: true,
				type: "text"
			});
		} else {
			setDisplayPassword({
				changeIcon: false,
				type: "password"
			});
		}
	};

	const checkedRemember = (): void => {
		if (isChecked !== true) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	};


	return (
		<AdminContainer>
			<HeaderLogin>
				<HeaderWrapper>
					<img src={LogoAdmin} alt="logo animes ponto.com" />
					<TitleHeader>
						Área do administrador
					</TitleHeader>
				</HeaderWrapper>
			</HeaderLogin>

			<MainLogin>
				<ContainerForm>
					<BackgroundImage />

					<LoginForm>
						<form
							onSubmit={() => signIn(email, password)}
						>
							<h2>Painel de Login</h2>
							<fieldset>
								<input
									type="text"
									id="user"
									value={email}
									onChange={(e) => setEmail(e.target.value)}

								/>
								<label htmlFor="user">E-mail</label>
							</fieldset>
							<fieldset>
								<input
									type={displayPassword.type}
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}

								/>
								<label htmlFor="password">Senha</label>
								<span onClick={handlerShowHidden}>
									{displayPassword.changeIcon ? <BsEyeSlashFill size={24} /> : <BsEyeFill size={24} />}
								</span>
							</fieldset>

							<div className="group-check">
								<fieldset>
									<input
										type="checkbox"
										id="lembrar"
										checked={isChecked}
										onChange={checkedRemember}
									/>
									<label htmlFor="lembrar">
										Lembrar-me
									</label>
								</fieldset>

								<button type="submit">Acessar</button>
							</div>

							<a href="#">Esqueceu sua senha?</a>
						</form>
					</LoginForm>
				</ContainerForm>
			</MainLogin>

			<FooterLogin>
				© 2022 Animes.com ❤️ Desenvolvido pelo <a href="https://github.com/anthonibs">anthonibs</a> com muito carinho e aprendizado.
			</FooterLogin>
		</AdminContainer>
	);
};


export default Admin;