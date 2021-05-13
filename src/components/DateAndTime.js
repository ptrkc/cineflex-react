import styled from "styled-components";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function DateAndTime() {
    const { idMovie } = useParams();
    const [allShowtimes, setAllShowtimes] = useState([]);
    const [footerData, setFooterData] = useState([]);
    useEffect(() => {
        const showtimesRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
        );
        showtimesRequest.then((response) => {
            setAllShowtimes([...response.data.days]);
            setFooterData({
                id: response.data.id,
                title: response.data.title,
                posterURL: response.data.posterURL,
                small: true,
            });
        });
    }, [idMovie]);
    return (
        <Div>
            <Title>Selecione o horário</Title>
            {allShowtimes.map((date) => {
                return (
                    <div key={date.id}>
                        <Day>
                            {date.weekday} - {date.date}
                        </Day>
                        <TimesList>
                            {date.showtimes.map((showtime) => (
                                <Button
                                    size="small"
                                    key={showtime.id}
                                    as={Link}
                                    to={`/assentos/${String(showtime.id)}`}
                                >
                                    {showtime.name}
                                </Button>
                            ))}
                        </TimesList>
                    </div>
                );
            })}
            <Footer movie={footerData} />
        </Div>
    );
}

const TimesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 22px 0px;

    button {
        margin: 4px;
    }
`;
const Title = styled.p`
    font-size: 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: #293845;
    height: 66px;
    margin-bottom: 40px;
`;
const Day = styled.p`
    font-size: 20px;
    color: #293845;
    margin-bottom: 32px;
`;
const Div = styled.div`
    margin: 0px 24px 150px;
`;
