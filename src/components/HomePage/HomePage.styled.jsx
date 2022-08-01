import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const Title = styled.h1`
    margin-left: 10px;
    color: #212121;
    text-transform: uppercase;
    font-size: 24px;
`;

export const ListWrap = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    margin-bottom: 5px;
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: #414141;
    font-weight: 500;

    &:hover {
        color: #f131a1;
    }
`;