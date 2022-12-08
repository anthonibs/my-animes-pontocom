import styled from "styled-components";

const Selected = styled.select`
  height: 35px;
  color: ${props => props.theme.colors.textPrimary};
  padding: .325rem;
  border: 1px solid ${props => props.theme.colors.bgSecondary};
  outline: none;
  border-radius: 4px;
  background: ${props => props.theme.colors.bgTertiary};
  transition: outline .15s ease-out;  
        
  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.bgFourth};
  }

  option {
    background: ${props => props.theme.colors.bgTertiary};
  }
`;

export default Selected;