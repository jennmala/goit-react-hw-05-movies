import { Link, NavWrap } from './Navigation.styled';

export const Navigation = () => {
    return (
        <NavWrap>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
        </NavWrap>
    )
}