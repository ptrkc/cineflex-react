import styled from "styled-components";
import Movie from "./Movie";
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
    align-items: center;
    justify-content: center;
    color: #293845;
    height: 79px;
`;
const Day = styled.p`
    font-size: 20px;
    color: #293845;
`;
const SeatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

export default function Seats() {
    const seatsResponse = {
        id: 12,
        day: { id: 29062021, weekday: "Terça-feira", date: "19:00" },
        movie: {
            id: 1,
            title: "2067",
            posterURL:
                "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            overview:
                "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            releaseDate: "2020-10-01T00:00:00.000Z",
        },
        seats: [
            { id: 551, name: "1", isAvailable: true },
            { id: 552, name: "2", isAvailable: true },
            { id: 553, name: "3", isAvailable: true },
            { id: 554, name: "4", isAvailable: true },
            { id: 555, name: "5", isAvailable: true },
            { id: 556, name: "6", isAvailable: true },
            { id: 557, name: "7", isAvailable: true },
            { id: 558, name: "8", isAvailable: true },
            { id: 559, name: "9", isAvailable: true },
            { id: 560, name: "10", isAvailable: true },
            { id: 561, name: "11", isAvailable: true },
            { id: 562, name: "12", isAvailable: true },
            { id: 563, name: "13", isAvailable: true },
            { id: 564, name: "14", isAvailable: true },
            { id: 565, name: "15", isAvailable: true },
            { id: 566, name: "16", isAvailable: true },
            { id: 567, name: "17", isAvailable: true },
            { id: 568, name: "18", isAvailable: true },
            { id: 569, name: "19", isAvailable: true },
            { id: 570, name: "20", isAvailable: true },
            { id: 571, name: "21", isAvailable: true },
            { id: 572, name: "22", isAvailable: true },
            { id: 573, name: "23", isAvailable: true },
            { id: 574, name: "24", isAvailable: true },
            { id: 575, name: "25", isAvailable: true },
            { id: 576, name: "26", isAvailable: true },
            { id: 577, name: "27", isAvailable: true },
            { id: 578, name: "28", isAvailable: true },
            { id: 579, name: "29", isAvailable: true },
            { id: 580, name: "30", isAvailable: true },
            { id: 581, name: "31", isAvailable: true },
            { id: 582, name: "32", isAvailable: true },
            { id: 583, name: "33", isAvailable: true },
            { id: 584, name: "34", isAvailable: true },
            { id: 585, name: "35", isAvailable: true },
            { id: 586, name: "36", isAvailable: true },
            { id: 587, name: "37", isAvailable: true },
            { id: 588, name: "38", isAvailable: true },
            { id: 589, name: "39", isAvailable: true },
            { id: 590, name: "40", isAvailable: true },
            { id: 591, name: "41", isAvailable: true },
            { id: 592, name: "42", isAvailable: true },
            { id: 593, name: "43", isAvailable: true },
            { id: 594, name: "44", isAvailable: true },
            { id: 595, name: "45", isAvailable: true },
            { id: 596, name: "46", isAvailable: true },
            { id: 597, name: "47", isAvailable: true },
            { id: 598, name: "48", isAvailable: true },
            { id: 599, name: "49", isAvailable: true },
            { id: 600, name: "50", isAvailable: true },
        ],
    };

    const { id } = useParams();
    const [allSeats, setAllSeats] = useState([]);
    useEffect(() => {
        const seatsRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`
        );
        seatsRequest.then((response) => {
            console.log(response.data);
            response.data.seats.forEach((seat) => (seat.selected = false));
            setAllSeats([...response.data.seats]);
        });
    }, []);

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
        </Div>
    );
}
