import styled from "styled-components";

const Input = styled.input`
  height: 35px;
  color: ${props => props.theme.colors.textPrimary};
  padding: .325rem;
  border: 1px solid ${props => props.theme.colors.bgSecondary};
  outline: none;
  border-radius: 4px;
  transition: outline .15s ease-out;
  
  
  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.bgFourth};
  }
`;


export default Input;