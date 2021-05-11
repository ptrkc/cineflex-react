import styled from "styled-components";

const Movie = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 209px;
    padding: 0px 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 5px 15px;

    img {
        width: 100%;
    }
`;

export default function Movies(props) {
    const movie = props.movie;

    return (
        <Movie onClick={() => console.log(movie.id)}>
            <img src={movie.img} alt={movie.name} />
        </Movie>
    );
}
