import styled, { keyframes } from "styled-components";

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  width: 100%;
  max-width: 800px;
  background: ${props => props.theme.colors.bgPrimary};
  padding: 1rem;
  animation:  ${animate} .6s ease-in;
  
  h2 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.textPrimary};
    margin: 1rem 0 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  align-self: end;
`;