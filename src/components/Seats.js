import styled from "styled-components";
import SeatButton from "./SeatButton";
import Button from "./Button";
import InfoInputs from "./InfoInputs";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function Seats(props) {
    const { idShowtime } = useParams();
    const [allSeats, setAllSeats] = useState([]);
    const [bookRequest, setBookRequest] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({ name: "", cpf: "" });
    const [footerData, setFooterData] = props.states;

    useEffect(() => {
        const seatsRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idShowtime}/seats`
        );
        seatsRequest.then((response) => {
            response.data.seats.forEach((seat) => (seat.selected = false));
            setAllSeats([...response.data.seats]);
            setFooterData({
                ...footerData,
                id: response.data.movie.id,
                title: response.data.movie.title,
                posterURL: response.data.movie.posterURL,
                weekday: response.data.day.weekday,
                name: response.data.name,
                infoLoaded: true,
            });
            setBookRequest({ ids: [], name: "", cpf: "" });
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
    function updateInfo(newValue, info) {
        console.log({ ...personalInfo, [info]: newValue });
        setPersonalInfo({ ...personalInfo, [info]: newValue });
    }

    function bookSeats() {}

    return (
        <Div>
            <Title>Selecione o(s) assento(s)</Title>
            {!!allSeats.length ? null : <Spinner />}
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
            {!!allSeats.length ? <Guide /> : null}
            <InfoInputs personalInfo={personalInfo} updateInfo={updateInfo} />
            <Button onClick={bookSeats}>Reservar assento(s)</Button>
        </Div>
    );
}

const Div = styled.div`
    margin: 0px 24px 150px;
    a {
        margin: auto;
    }
    button {
        margin: 0px auto;
    }
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
    margin: 0px auto 40px;
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
