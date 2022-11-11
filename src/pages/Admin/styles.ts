import styled from "styled-components";

import backgroundLogin from "../../assets/rafiki-bg-image-area-admin.svg";
import backgroundFooter from "../../assets/background-footer.svg";

export const AdminContainer = styled.div`
   	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${props => props.theme.colors.bgTertiary};
	display: grid;
	grid-template-columns:250px auto;
    grid-template-rows: 70px auto 50px;
	grid-template-areas: 
		"HEADER HEADER"
		"MAIN MAIN"
		"FOOTER FOOTER"
	;
`;

export const HeaderLogin = styled.header`
	grid-area: HEADER;
	background: ${props => props.theme.colors.bgPrimary};
	color: ${props => props.theme.colors.textPrimary};
	padding: 0 2rem;
	box-shadow: 0 0px 10px 1px rgb(0 0 0 / 20%);
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1260px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	> img {
			display: block;
			padding: .325rem;
			width: 150px;
			height: 50px;
		}
`;

export const TitleHeader = styled.h2`
	font-size: 1rem;
`;


export const MainLogin = styled.main`
	grid-area: MAIN;
	
`;

export const ContainerForm = styled.section`
	display: flex;
	width: 100%;
	max-width: 720px;
	height: 300px;
	margin: 0 auto;
	margin-top: 10%;
`;


export const BackgroundImage = styled.div`
	height: auto;
	width: 40%;
	background: no-repeat center url(${backgroundLogin});
	background-size: contain;

`;

export const LoginForm = styled.div`
	padding-left: 3rem;
	width: 60%;

	> form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		padding-left: 3rem;
		border-left: 2px solid ${props => props.theme.colors.bgFourth};
		
		> h2 {
			font-size: 1.6rem;
			text-align: center;
			margin-top: 1.5rem;
			color: ${props => props.theme.colors.textPrimary};
		}

		> fieldset {
			display: flex;
			gap: .3rem;
			flex-direction: column;
			position: relative;
			margin-bottom: .5rem;

			> label {
				font-size: 1rem;
				left: .5rem;
				position: absolute;
				top: 1rem;
				transition: all .3s;
				padding: 0 .325rem;
				color: ${props => props.theme.colors.textSecondary};
			}

			> input {
				border-radius: 0.2rem;
				border: 2px solid ${props => props.theme.colors.bgFourth};
				font-size: .9rem;
				color: ${props => props.theme.colors.textSecondary};
				padding-top: 20px;
				padding-left: .5rem;
				padding-bottom: .325rem;
				outline: none;
				

				&:focus {
					border: 2px solid  ${props => props.theme.colors.hoverPrimary};
				}
			}

			> input:valid + label, input:focus + label {
				top: -0.5rem;
				transition: all .4s ease-out;
				background: ${props => props.theme.colors.bgTertiary};
			}

			> span {
				display: block;
				color:  ${props => props.theme.colors.bgFourth};
				position: absolute;
				right: 15px;
				top: 10px;
				transition: all .3s ease-in;

				&:hover {
					color:  ${props => props.theme.colors.hoverPrimary};
				}
			}
			
		}

		.group-check {
			margin-top: .325rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			> fieldset {
				display: flex;
				align-items: center;

				> input {
					width: 20px;
					height: 20px;
				}
				
				> label {
					margin-left: .5rem;
					color: ${props => props.theme.colors.textSecondary};
				}
			}

			> button {
				border: none;
				border-radius: .3rem;
				background: ${props => props.theme.colors.bgFourth};
				height: 40px;
				color: ${props => props.theme.colors.textTertiary};
				padding: 0 1rem;
				font-size: 1rem;
				font-weight: bold;
				transition: all .3s ease-in;

				&:hover {
					background: ${props => props.theme.colors.hoverPrimary};
				}
			}
		}

		> a {
			text-decoration: none;
			font-size: .925rem;
			color: ${props => props.theme.colors.textFourth};
			font-weight: bold;
			transition: all .3s ease-in;

			&:hover {
				text-decoration: underline;
				color: ${props => props.theme.colors.hoverPrimary};
			}
		}
	}
`;


export const FooterLogin = styled.footer`
	text-align: center;
	line-height: 50px;
	font-size: .9rem;
	color: #FFF;
	grid-area: FOOTER;
	background:  #2b2b2b  url(${backgroundFooter}) no-repeat;
	background-size: cover;

	> a {
		color: white;
		transition: all .3s ease-in;

		&:hover {
			color: ${props => props.theme.colors.hoverPrimary};
		}
	}
`;