import styled from "styled-components";
import Movie from "./Movie";

const TimesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 22px 0px;

    li {
        margin: 4px;
    }
`;
const Title = styled.h2`
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
    height: 110px;
`;
const Day = styled.h3`
    font-size: 20px;
    color: #293845;
`;
export default function DateAndTime() {
    const getDatesResponse = [
        {
            day: "Quinta-feira - 24/06/2021",
            times: ["15:00", "19:00"],
        },
        {
            day: "Sexta-feira - 25/06/2021",
            times: ["15:00", "19:00"],
        },
        {
            day: "Sábado - 26/06/2021",
            times: ["16:00", "20:00"],
        },
    ];
    return (
        <>
            <Title>Selecione o horário</Title>
            {getDatesResponse.map((date) => {
                return (
                    <>
                        <Day>{date.day}</Day>
                        <TimesList>
                            {date.times.map((time) => (
                                <li>{time}</li>
                            ))}
                        </TimesList>
                    </>
                );
            })}
        </>
    );
}
