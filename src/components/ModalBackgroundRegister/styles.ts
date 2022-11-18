import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, .25);
    min-height: calc(100vh - 100px);
    backdrop-filter: blur(2px);
    width: 100%;
`;