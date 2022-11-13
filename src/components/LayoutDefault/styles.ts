import styled from "styled-components";

export const LayoutGrid = styled.div`
    display: grid;
    height: 100%;
    min-height: 100vh;
    background: ${props => props.theme.colors.bgTertiary};
    grid-template-columns: auto 1fr;
    grid-template-rows: 50px auto 50px;
    grid-template-areas: 
        "ASIDE HEADER"
        "ASIDE CONTENT"
        "ASIDE FOOTER"
    ;
`;

