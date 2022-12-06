import styled, { keyframes } from "styled-components";

// Animação Tabela de Usuários;
const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;


export const UsersContainer = styled.section`
    position: relative;
    height: 100%;
    background-color: ${props => props.theme.colors.bgTertiary};
    width: 100%;
    padding: 1.5rem;

    h2 {
        margin: 1.5rem 0;
        color: ${props => props.theme.colors.textFourth};
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
    margin-left: auto;
    cursor: pointer;
`;



// Estilo Tabela
export const Container = styled.div`
    height: calc(100vh - 260px);
    overflow-y: auto;
`;

export const TableContainer = styled.table`
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    box-shadow: rgba(0, 0, 0, .06) 0px 1px 4px;
`;

export const TableHead = styled.thead`
    background: ${props => props.theme.colors.bgSecondary};
    color: ${props => props.theme.colors.textTertiary};
    text-align: center;
    width: 100%;
    border-bottom: 2px solid blue;
`;

export const TableHeadColumn = styled.th`
    padding: .625rem;
`;

export const TableRow = styled.tr`
    border-bottom: 2px solid ${props => props.theme.colors.bgFourth};
`;


export const TableBodyRow = styled.tr`
    border-bottom: 2px solid ${props => props.theme.colors.bgPrimary};
    line-height: 45px;
    opacity: .7;
    transition: all  .5s ease-in-out;
    animation:  ${animate} .5s ease;

    &:hover {
        opacity: 1;
        transform: translateX(4px);
    }
`;

export const TableBody = styled.tbody` 
    position: relative;
`;

export const TableBodyColumn = styled.td`
    padding: 0 .325rem;
    vertical-align: middle;
    color: ${props => props.theme.colors.textSecondary};
  
    > img {
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 3px;
        width: 40px;
        height: 40px;
    }

    &.center {
        text-align: center;
    }


    > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        backdrop-filter: grayscale(30%);

        > button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            opacity: .6;
            padding: 4px 6px;
            transition: opacity .2s ease-in-out;

            &:hover {
                opacity: 1;
            }

        }
    }
`;