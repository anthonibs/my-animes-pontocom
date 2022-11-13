import styled from "styled-components";

export const AsideContainer = styled.aside`
    position: relative;
    grid-area: ASIDE;
    background-color: ${props => props.theme.colors.bgSecondary};
    transition: all 15s ease-in-out;

    > div {
        height: 50px;
    }

    > nav {
        height: calc(100vh - 50px);
    }
`;

export const MenuIcon = styled.div`
    position: absolute;
    top: 0;
    right: -50px;
    display: flex;
    align-items: center;
    width: 50px;
    height: 100%;
    padding: 0 .625rem;
    cursor: pointer;
`;


export const Navbar = styled.nav`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;

    >a {
        display: flex;
        align-items: center;
        padding: .5rem 1.6rem .5rem .325rem;
        text-decoration: none;
        border-left: 4px solid ${props => props.theme.colors.bgSecondary};
        color: ${props => props.theme.colors.textSecondary};
        transition: all .15s ease-in-out;
        user-select: none;

        > svg {
            font-size: 24px;
            margin-right: 10px;
        }
        

        &:hover:not(.isActiveLink) {
            color: ${props => props.theme.colors.textSecondary};
            border-left: 4px solid #a3a3a3;
            background-color:#d4d4d4;
            box-shadow: 0 1px 3px 0px #aaaaaa;
            transition: all .15s ease-in-out;
        }

        

        .hide {
            display: none;
            pointer-events: none;
        }
    }

    .isActiveLink {
        color: ${props => props.theme.colors.textPrimary};
        border-left: 4px solid ${props => props.theme.colors.bgFourth};
        background-color: #c7c7c7;
        box-shadow: 0 1px 3px 0px #aaaaaa;
        transition: all .15s ease-in-out;
    }

`;


export const LogoContainer = styled.figure`
    height: 50px;
    weight: auto;
`;

export const Logo = styled.img`
    margin: 0 auto;
    display: block;
    height: 100%;
    weight: 100%;
    padding: .625rem;
`;
