import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import Spinner from './Spinner';

export default function Movies(props) {
  const [movies, setMovies] = useState([]);
  const { states } = props;
  const [footerData, setFooterData, setTicketsToBuy, setAllSeats] = states;

  useEffect(() => {
    setTicketsToBuy({
      ids: [],
      compradores: [],
    });
    setAllSeats([]);

    const moviesRequest = axios.get(
      `${process.env.REACT_APP_API_URL}/movies`,
    );
    moviesRequest.then((response) => {
      setMovies(response.data);
    });
    if (footerData.infoLoaded) {
      setFooterData({
        ...footerData,
        infoLoaded: false,
      });
    }
  }, []);

  return (
    <>
      <Title>Selecione o filme</Title>
      <MoviesList>
        {movies.length ? null : <Spinner />}
        {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
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
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    height: 66px;
    margin-bottom: 32px;
`;
