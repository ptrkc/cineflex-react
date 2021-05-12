import styled from "styled-components";
import SeatButton from "./SeatButton";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Div = styled.div`
    margin: 0px 24px;
`;
const Title = styled.p`
    font-size: 24px;
    display: flex;
    text-align: center;
    align-items: flex-end;
    justify-content: center;
    color: #293845;
    height: 66px;
    margin-bottom: 32px;
`;
const SeatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px auto 18px;
    max-width: 600px;
    min-width: 265px;
`;
const GuideStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px auto 18px;
    max-width: 600px;
    min-width: 265px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #4e5a65;
        font-size: 13px;

        li {
            margin-bottom: 10px;
        }
    }
`;

export default function Seats() {
    const { idShowtime } = useParams();
    const [allSeats, setAllSeats] = useState([]);
    useEffect(() => {
        const seatsRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idShowtime}/seats`
        );
        seatsRequest.then((response) => {
            response.data.seats.forEach((seat) => (seat.selected = false));
            setAllSeats([...response.data.seats]);
        });
    }, [idShowtime]);

    function createRows() {
        const rows = Math.ceil(allSeats.length / 10);
        const rowsArrays = [];
        for (let i = 0; i < rows; i++) {
            const cutRow = allSeats.slice(i * 10, i * 10 + 10);
            rowsArrays.push({ id: i, seats: cutRow });
        }
        return rowsArrays;
    }
    function toggleSelection(name) {
        const seatToToggle = allSeats.find((seat) => seat.name === name);
        if (!seatToToggle.selected) {
            seatToToggle.selected = true;
        } else {
            seatToToggle.selected = false;
        }
        setAllSeats([...allSeats]);
    }
    function Guide() {
        return (
            <GuideStyle>
                <div>
                    <SeatButton seat={{ isAvailable: true, selected: true }} />
                    Selecionado
                </div>
                <div>
                    <SeatButton seat={{ isAvailable: true, selected: false }} />
                    Disponível
                </div>
                <div>
                    <SeatButton
                        seat={{ isAvailable: false, selected: false }}
                    />
                    Indisponível
                </div>
            </GuideStyle>
        );
    }

    return (
        <Div>
            <Title>Selecione o(s) assento(s)</Title>
            {createRows().map((row) => (
                <SeatsList key={row.id}>
                    {row.seats.map((seat) => (
                        <SeatButton
                            key={seat.id}
                            seat={seat}
                            toggleSelection={toggleSelection}
                        />
                    ))}
                </SeatsList>
            ))}
            <Guide />
        </Div>
    );
}
