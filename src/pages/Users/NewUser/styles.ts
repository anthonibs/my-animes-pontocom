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
  animation: ${animate} .6s ease-in;
  height: 100%;
  padding: 24px;
  width: 100%;

  > a {
    color: ${props => props.theme.colors.textFourth};
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    transition: color .3s ease-in;

    > span {
      display: inline-flex;
      flex-direction: column;
    }

    &:hover {
      color: ${props => props.theme.colors.hoverPrimary};
    }
  }
`;
