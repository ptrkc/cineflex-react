import styled from "styled-components";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function DateAndTime(props) {
    const { idMovie } = useParams();
    const [allShowtimes, setAllShowtimes] = useState([]);
    const [footerData, setFooterData, ticketsToBuy, setTicketsToBuy] =
        props.states;

    useEffect(() => {
        const showtimesRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
        );
        showtimesRequest.then((response) => {
            setAllShowtimes([...response.data.days]);
            setFooterData({
                ...footerData,
                id: response.data.id,
                title: response.data.title,
                posterURL: response.data.posterURL,
                infoLoaded: true,
            });
        });
        setTicketsToBuy({
            ids: [], // 1,2,3
            compradores: [], // { idAssento: 1, nome: "Fulano", cpf: "12345678900" },
        });
    }, []);
    return (
        <Div>
            <Title>Selecione o horário</Title>
            {!!allShowtimes.length ? null : <Spinner />}
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
    color: ${(props) => props.theme.textColor};
    height: 66px;
    margin-bottom: 40px;
`;
const Day = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 32px;
`;
const Div = styled.div`
    margin: 0px 24px 150px;
`;
