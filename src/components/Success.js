import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Success(props) {
    const [footerData, setFooterData, ticketsToBuy, setTicketsToBuy] =
        props.states;
    useEffect(() => {
        // const buyTicketsRequest = axios.post(
        //     "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
        // );
        // buyTicketsRequest.then((response) => {
        //     displaySuccess();
        // });
        // buyTicketsRequest.catch((response) => {
        //     requestFailed();
        // });
        if (footerData.infoLoaded) {
            setFooterData({
                ...footerData,
                infoLoaded: false,
            });
        }
        setTicketsToBuy({
            ids: [], // 1,2,3
            compradores: [], // { idAssento: 1, nome: "Fulano", cpf: "12345678900" },
        });
    }, []);

    return (
        <>
            <Title>Pedido feito com sucesso!</Title>
            <Spinner />
        </>
    );
}

// const MoviesList = styled.ul`
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     max-width: 1080px;
//     margin: auto;
// `;
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
