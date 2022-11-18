import styled from "styled-components";

export const Modal = styled.form`
    width: 600px;
    background: ${props => props.theme.colors.bgPrimary};
    padding: 1rem;
    border-radius: 6px;
    margin: 0 auto;

    h2 {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.textPrimary};
    }
`;

export const ModalContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;