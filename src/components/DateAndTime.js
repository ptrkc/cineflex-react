import styled from "styled-components";
import Movie from "./Movie";
import Button from "./Button";
import { Link } from "react-router-dom";

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
    align-items: center;
    justify-content: center;
    color: #293845;
    height: 110px;
`;
const Day = styled.p`
    font-size: 20px;
    color: #293845;
`;
const Div = styled.div`
    margin: 0px 24px;
`;

export default function DateAndTime() {
    const getDatesResponse = [
        {
            id: 1,
            day: "Quinta-feira - 24/06/2021",
            times: [
                { time: "15:00", id: 1 },
                { time: "19:00", id: 2 },
            ],
        },
        {
            id: 2,
            day: "Sexta-feira - 25/06/2021",
            times: [
                { time: "15:00", id: 3 },
                { time: "19:00", id: 4 },
            ],
        },
        {
            id: 3,
            day: "Sábado - 26/06/2021",
            times: [
                { time: "15:00", id: 5 },
                { time: "19:00", id: 6 },
            ],
        },
    ];
    return (
        <Div>
            <Title>Selecione o horário</Title>
            {getDatesResponse.map((date) => {
                return (
                    <div key={date.id}>
                        <Day>{date.day}</Day>
                        <TimesList>
                            {date.times.map((time) => (
                                <Button
                                    size="small"
                                    key={time.id}
                                    as={Link}
                                    to={`/sessao/${String(time.id)}`}
                                >
                                    {time.time}
                                </Button>
                            ))}
                        </TimesList>
                    </div>
                );
            })}
        </Div>
    );
}
