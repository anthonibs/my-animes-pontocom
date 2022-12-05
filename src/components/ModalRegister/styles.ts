import styled from "styled-components";

interface IModalProps {
    isOpenModal: boolean;
}

export const Modal = styled.form<IModalProps>`
    display: ${props => !props.isOpenModal ? "none" : "block"};
    width: 600px;
    background: ${props => props.theme.colors.bgPrimary};
    padding: 1rem;
    border-radius: 6px;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, .1) 0px 4px 6px -1px, rgba(0, 0, 0, .06) 0px 2px 4px -1px;

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
    width: 100%;
`;

export const ButtonGroup = styled.div`
    display: flex;
    margin-top: 1.6rem;
    gap: .825rem;
    justify-content: flex-end;
`;