import axios from "axios";
import styled from "styled-components";
import Movie from "./Movie";
import { useState, useEffect } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const moviesRequest = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
        );
        moviesRequest.then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <>
            <Title>Selecione o filme</Title>
            <MoviesList>
                {movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
            </MoviesList>
        </>
    );
}

const MoviesList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1080px;
    margin: auto;
`;
const Title = styled.p`
    font-size: 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: #293845;
    height: 66px;
    margin-bottom: 32px;
`;
