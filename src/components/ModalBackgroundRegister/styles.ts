import styled from "styled-components";

interface IModalContainerProps {
    isOpenModal: boolean;
}

export const ModalContainer = styled.div<IModalContainerProps>`
    display: ${props => !props.isOpenModal ? "none" : "flex"};;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    min-height: calc(100vh - 100px);
    backdrop-filter: blur(1px);
    width: 100%;
    z-index: 1;
`;