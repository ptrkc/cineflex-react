import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useHistory } from "react-router";
import Button from "./Button";

export default function Success(props) {
    const [footerData, setFooterData, ticketsToBuy, allSeats] = props.states;
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if (!ticketsToBuy.compradores.length) {
            backHome();
        }
        const buyTicketsRequest = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
            ticketsToBuy
        );
        buyTicketsRequest.then((response) => {
            setSuccess(true);
        });
        buyTicketsRequest.catch((response) => {
            alert("Parece que algo deu errado. Tente novamente.");
            history.goBack();
        });
        if (footerData.infoLoaded) {
            setFooterData({
                ...footerData,
                infoLoaded: false,
            });
        }
    }, []);

    function backHome() {
        history.push("/");
    }

    if (!success) {
        return (
            <MarginTop>
                <Spinner />
            </MarginTop>
        );
    } else {
        return (
            <Div>
                <Title>Pedido feito com sucesso!</Title>

                <Ticket>
                    <div className="movie-info">
                        <img
                            src={footerData.posterURL}
                            alt={footerData.title}
                        />
                        <Label>Filme e sessão:</Label>
                        <p>{footerData.title}</p>
                        <p>{footerData.date}</p>
                        <p>{footerData.name}</p>
                    </div>
                    {ticketsToBuy.compradores.map((c) => {
                        return (
                            <div className="personal-data" key={c.idAssento}>
                                <p>
                                    <Label>Nome: </Label>
                                    {c.nome}
                                </p>
                                <p>
                                    <Label>CPF: </Label>
                                    {c.cpf.slice(0, 3)}.{c.cpf.slice(3, 6)}.
                                    {c.cpf.slice(6, 9)}-{c.cpf.slice(9, 11)}
                                </p>
                                <p>
                                    <Label>Assento: </Label>
                                    {
                                        allSeats.find(
                                            (s) => s.id === c.idAssento
                                        ).name
                                    }
                                </p>
                            </div>
                        );
                    })}
                </Ticket>

                <Button onClick={backHome}>Voltar pra Home</Button>
            </Div>
        );
    }
}
const MarginTop = styled.div`
    margin-top: 150px;
`;

const Div = styled.div`
    margin: 0px 15px;
    button {
        margin: 0px auto;
    }

    img {
        width: 100%;
        margin-bottom: 10px;
    }
`;
const Label = styled.span`
    filter: brightness(0.5);
    font-weight: bold;
`;
const Ticket = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px auto 40px;
    max-width: 600px;
    min-width: 265px;
    font-size: 18px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    border: 3px solid ${(props) => props.theme.textColor};
    border-radius: 3px;
    padding: 5px;
    p {
        line-height: 25px;
    }
    .movie-info {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
            width: 70%;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }
        div {
            background-color: blue;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    .personal-data {
        padding: 10px 0px;

        border-top: dashed 3px ${(props) => props.theme.textColor};
    }
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
    text-align: center;
`;
