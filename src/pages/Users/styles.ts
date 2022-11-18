import styled from "styled-components";

export const UsersContainer = styled.section`
    position: relative;
    height: 100%;
    background: #f9f9;
    weight: 100%;

    li {
        padding: .325rem;
        margin: 1rem 0;
        border: 2px solid black;
    }

`;

export const AddNewUser = styled.button`
    display: flex;
    align-items: center;
    gap: .325rem;
    padding: .325rem .625rem;
    color: ${props => props.theme.colors.textTertiary};
    background: ${props => props.theme.colors.bgFourth};
    border: none;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
`;