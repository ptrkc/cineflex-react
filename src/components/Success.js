import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Success(props) {
    const [
        footerData,
        setFooterData,
        ticketsToBuy,
        setTicketsToBuy,
        allSeats,
        setAllSeats,
    ] = props.states;
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        const buyTicketsRequest = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
            ticketsToBuy
        );
        buyTicketsRequest.then((response) => {
            console.log(response.data);
            setSuccess(true);
        });
        buyTicketsRequest.catch((response) => {
            alert("whoops"); //requestFailed();
        });
        if (footerData.infoLoaded) {
            setFooterData({
                ...footerData,
                infoLoaded: false,
            });
        }
    }, []);

    // setTicketsToBuy({
    //     ids: [], // 1,2,3
    //     compradores: [], // { idAssento: 1, nome: "Fulano", cpf: "12345678900" },
    // });
    if (!success) {
        return <Spinner />;
    } else {
        return (
            <>
                <Title>Pedido feito com sucesso!</Title>
                {ticketsToBuy.compradores.map((c) => {
                    return (
                        <Ticket key={c.idAssento}>
                            Filme: {footerData.title}
                            <br />
                            dia da semana: {footerData.weekday}
                            <br />
                            data: {footerData.date}
                            <br />
                            Hora: {footerData.name}
                            <br />
                            Nome: {c.nome}
                            <br />
                            Assento:
                            {allSeats.find((s) => s.id === c.idAssento).name}
                            <br />
                            CPF: {c.cpf}
                            <br />
                        </Ticket>
                    );
                })}
            </>
        );
    }
}

const Ticket = styled.div`
    margin: 0px auto 40px;
    max-width: 600px;
    min-width: 265px;
    font-size: 18px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    border: 3px solid ${(props) => props.theme.textColor};
    border-radius: 3px;
    padding: 5px;
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
