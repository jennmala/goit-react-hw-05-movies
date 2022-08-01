import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const Button = styled.button`
    display: block;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 4px;
    border-color: transparent;
    height: 20px;
    color: #ffffff;
    background-color: grey;

    &:hover {
        background-color: #919191;
        border-color: grey;
    }
`;

export const Title = styled.h2`    
    color: #313131;
    & span {
        color: #717171;
    }
`;

export const Poster = styled.img`
    display: block;
    margin-left: 20px;
    width: 200px;
`;

export const Flex = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: start; 
`;

export const Description = styled.div`
    margin-left: 20px;
    color: #515151;
`;

export const Addition = styled.div`
    margin-left: 20px;
    color: #515151;
`;

export const ListWrap = styled.ul`
    list-style: none;
    padding-left: 10px;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: #414141;
    font-weight: 500;

    &:hover {
        color: violet;
    }
`;