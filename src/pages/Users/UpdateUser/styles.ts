import styled, { keyframes } from "styled-components";

// Animação Tabela de Usuários;
const animate = keyframes`
    0% {
      opacity: 0;
    }
    
    50% {
      opacity: .3 ;
    }

    100% {
      opacity: 1;
    }
`;

export const Container = styled.section`
  height: 100%;
  width: 100%;
  padding: 24px;
  animation:  ${animate} .6s ease-in;

  > a {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textFourth};
    font-weight: bold;
    transition: color .3s ease-in;
    display: inline-block;
    margin-bottom: 1rem;

    > span {
      display: inline-flex;
      flex-direction: column;
    }

    &:hover {
      color: ${props => props.theme.colors.hoverPrimary};
    }
  }
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  background: ${props => props.theme.colors.bgPrimary};
  padding: 1rem;


  h2 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: .825rem;
  justify-content: flex-end;
`;