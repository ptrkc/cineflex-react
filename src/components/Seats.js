import styled from "styled-components";
import SeatButton from "./SeatButton";
import SeatsGuide from "./SeatsGuide";
import Button from "./Button";
import InfoInputs from "./InfoInputs";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function Seats(props) {
    const { idShowtime } = useParams();
    const [
        footerData,
        setFooterData,
        ticketsToBuy,
        setTicketsToBuy,
        allSeats,
        setAllSeats,
    ] = props.states;
    const history = useHistory();

    useEffect(() => {
        setTicketsToBuy({
            ids: [],
            compradores: [],
        });
        const seatsRequest = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idShowtime}/seats`
        );
        seatsRequest.then((response) => {
            const seatsArray = response.data.seats.map((seat) => {
                return { ...seat, selected: false };
            });
            setAllSeats([...seatsArray]);
            setFooterData({
                ...footerData,
                id: response.data.movie.id,
                title: response.data.movie.title,
                posterURL: response.data.movie.posterURL,
                weekday: response.data.day.weekday,
                date: response.data.day.date,
                name: response.data.name,
                infoLoaded: true,
            });
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

    function areYouSure(idToChange, nameToChange) {
        const seat = ticketsToBuy.compradores.find(
            (c) => c.idAssento === idToChange
        );
        if (!!seat.cpf || !!seat.nome) {
            const answer = window.confirm(
                `O assento ${nameToChange} já possui dados preenchidos. Tem certeza que deseja removê-lo?`
            );
            return answer;
        } else {
            return true;
        }
    }
    function toggleSelection(name) {
        const seatToToggle = allSeats.find((seat) => seat.name === name);
        const idToChange = parseInt(seatToToggle.id);
        const nameToChange = parseInt(seatToToggle.name);
        if (!seatToToggle.selected) {
            seatToToggle.selected = true;
            const newArr = [
                ...ticketsToBuy.compradores,
                { idAssento: idToChange, nome: "", cpf: "" },
            ];
            setTicketsToBuy({
                ids: [...ticketsToBuy.ids, idToChange],
                compradores: [...newArr],
            });
        } else {
            if (!areYouSure(idToChange, nameToChange)) {
                return;
            }
            seatToToggle.selected = false;
            setTicketsToBuy({
                ids: [...ticketsToBuy.ids.filter((id) => id !== idToChange)],
                compradores: [
                    ...ticketsToBuy.compradores.filter(
                        (c) => c.idAssento !== idToChange
                    ),
                ],
            });
        }
        setAllSeats([...allSeats]);
    }

    function bookSeats() {
        let notFilled = [];
        let wrongCPF = false;
        if (ticketsToBuy.compradores.length < 1) {
            alert("Por favor, escolha algum assento.");
        } else {
            ticketsToBuy.compradores.forEach((c) => {
                const seat = allSeats.find((s) => s.id === c.idAssento).name;
                if (!!c.cpf === false || !!c.nome === false) {
                    notFilled.push(" " + seat);
                } else if (c.cpf.length < 11) {
                    wrongCPF = true;
                }
            });
            if (!notFilled.length && !wrongCPF) {
                history.push("/sucesso");
            } else {
                if (notFilled.length) {
                    alert(
                        "Preencha os dados do(s) assento(s):" +
                            notFilled.toString()
                    );
                } else {
                    alert("O CPF deve conter 11 dígitos.");
                }
            }
        }
    }

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
            {!!allSeats.length ? <SeatsGuide /> : null}
            {ticketsToBuy.compradores.map((c) => {
                return (
                    <InfoInputs
                        key={allSeats.find((s) => s.id === c.idAssento).name}
                        seatNumber={
                            allSeats.find((s) => s.id === c.idAssento).name
                        }
                        id={c.idAssento}
                        states={[ticketsToBuy, setTicketsToBuy]}
                    />
                );
            })}
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
    font-weight: bold;
    justify-content: center;
    color: ${(props) => props.theme.textColor};
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
