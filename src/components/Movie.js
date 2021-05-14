import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
export default function Movie(props) {
    const { id, title, posterURL, small } = props.movie;
    if (small) {
        return (
            <MovieStyle as="div" small={true}>
                <img src={posterURL} alt={title} />
            </MovieStyle>
        );
    } else {
        return (
            <MovieStyle as={Link} to={`/sessoes/${id}`}>
                <Spinner />
                <img src={posterURL} alt={title} />
            </MovieStyle>
        );
    }
}

const MovieStyle = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.small ? "64px" : "145px")};
    height: ${(props) => (props.small ? "89px" : "209px")};
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 5px 5px;
    background: ${(props) => (props.small ? "#ffffff" : props.theme.textColor)};
    flex-shrink: 0;
    z-index: 0;
    img {
        width: 100%;
        padding: 0px 8px;
        position: absolute;
        z-index: 0.2;
    }
`;
