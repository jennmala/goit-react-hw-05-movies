import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const NavWrap = styled.nav`
    border-bottom: 1px solid grey;
`;

export const Link = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: #917171;
    font-weight: 500;

    &.active {
        color: violet;
        font-weight: 700;   
    }
`;