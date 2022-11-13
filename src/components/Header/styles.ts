import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: HEADER;
    background-color: ${props => props.theme.colors.bgPrimary};
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .iconColor {
        color: ${props => props.theme.colors.textSecondary};
    }
`;


export const BoxProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 100%;
    gap: 1rem;
    margin-right: 2rem;
`;


export const Notification = styled.div`
    position: relative;
    border-radius: 5px;
    padding: .625rem;
    transition: all .4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.hoverSecondary};
    }

    > span {
        position: absolute;
        top: -4px;
        right: -6px;
        text-align: center;
        line-height: 22px;
        background-color: ${props => props.theme.colors.success};
        color: ${props => props.theme.colors.textTertiary};
        border-radius: 50%;
        width: 22px;
        height: 22px;
        font-weight: bold;
        font-size: .725rem;
        outline: 1px solid ${props => props.theme.colors.bgPrimary};        
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .625rem;
    border-radius: 5px;
    padding: 0 .625rem;
    
    transition: all .4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.hoverSecondary};
    }
    
    > span {
        display: block;
        font-size: .9rem;
        line-height: normal;
        color: ${props => props.theme.colors.textSecondary}  
    }

    > img {
        display: block;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        overflow: hidden;
        object-position: center;
        object-fit: cover; 
    }
`;


export const ConfigurationGroup = styled.div`
    display: flex;
`;


export const IconBox = styled.div`
    position: relative;
    border-radius: 5px;
    padding: .625rem;
    -webkit-transition: all .5s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.hoverSecondary};
    }
    
`;