import styled from "styled-components";


interface IProps {
    backgroundColor?: string;
}

export const ButtonCustom = styled.button<IProps>`
    padding: .325rem .625rem;
    height: 40px;
    width: 80px;
    color: ${props => props.theme.colors.textTertiary};
    border: 1px solid ${props => props.theme.colors.bgSecondary};
    outline: none;
    font-weight: 600;
    border-radius: 4px;
    background-color: ${props => !props.backgroundColor ? props.theme.colors.bgFourth : props.backgroundColor};
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    opacity: .8;
    box-shadow: rgba(0, 0, 0, .1) 1.95px 1.95px 2.6px;
    
    &:hover {
        opacity: 1;
    }
        
    &:disabled {
        background-color: ${props => props.theme.colors.bgSecondary};
        color: ${props => props.theme.colors.textSecondary};
    }

`;