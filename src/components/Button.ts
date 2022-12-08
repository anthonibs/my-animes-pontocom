import styled from "styled-components";

const Button = styled.button`
  padding: .325rem .625rem;
  height: 40px;
  color: ${props => props.theme.colors.textTertiary};
  border: 1px solid ${props => props.theme.colors.bgSecondary};
  outline: none;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.bgFourth};
  transition: opacity .3s ease-in-out;
  cursor: pointer;
  opacity: .8;
  box-shadow: rgba(0, 0, 0, .1) 1.95px 1.95px 2.6px;
  user-select: none;
  
  &:focus{
      outline: 2px solid ${props => props.theme.colors.bgFourth};
  }
  
  &:hover {
      opacity: 1;
  }
      
  &:disabled {
      pointer-events: none;
      background-color: ${props => props.theme.colors.bgSecondary};
      color: ${props => props.theme.colors.textSecondary};
  }
`;

export default Button;