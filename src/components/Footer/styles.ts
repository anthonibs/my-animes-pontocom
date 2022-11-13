import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.bgPrimary};
    grid-area: FOOTER;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    > p {
        font-size: .825rem;
        line-height: 50px;
        color: ${props => props.theme.colors.textSecondary}
    }

    #applicationVersion {
        color: ${props => props.theme.colors.textPrimary};
        font-weight: bold;
    }
`;