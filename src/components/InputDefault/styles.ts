import styled from "styled-components";

interface IProps {
    tamanho?: string;
}

export const InputContainer = styled.fieldset<IProps>`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: ${props => props.tamanho != undefined ? props.tamanho : "100%"};

    label {
        color: ${props => props.theme.colors.textPrimary};
        font-size: 1rem;
    }

    input {
        height: 35px;
        color: ${props => props.theme.colors.textPrimary};
        padding: .325rem;
        border: 1px solid ${props => props.theme.colors.bgSecondary};
        outline: none;
        border - radius: 4px;
        transition: outline .2s ease-in-out;
    

        &::placeholder {
        color: ${props => props.theme.colors.textSecondary};
    }

        &:focus {
        outline: 2px solid ${props => props.theme.colors.bgFourth};
    }
}
`;