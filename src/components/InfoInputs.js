import styled from "styled-components";
export default function InfoInputs(props) {
    const key = props.id;
    const [ticketsToBuy, setTicketsToBuy] = props.states;

    function updateInfo(value, info) {
        console.log("entered updateinfo");
        console.log([...ticketsToBuy.compradores]);
        const newArr = [...ticketsToBuy.compradores];
        newArr.find((c) => c.idAssento === key)[info] = value;
        console.log({
            ids: [...ticketsToBuy.ids],
            compradores: [...newArr],
        });
        setTicketsToBuy({
            ids: [...ticketsToBuy.ids],
            compradores: [...newArr],
        });
    }
    return (
        <InputsStyle>
            <p>Nome do espectador:</p>
            <input
                type="text"
                value={
                    ticketsToBuy.compradores.find((c) => c.idAssento === key)
                        .key
                }
                onChange={(e) => updateInfo(e.target.value, "nome")}
                placeholder="Digite seu nome..."
            ></input>
            <p>CPF do espectador:</p>
            <input
                type="number"
                value={
                    ticketsToBuy.compradores.find((c) => c.idAssento === key)
                        .key
                }
                onChange={(e) => updateInfo(e.target.value, "cpf")}
                placeholder="Digite seu CPF..."
            ></input>
        </InputsStyle>
    );
}

const InputsStyle = styled.div`
    margin: 0px auto 40px;
    max-width: 600px;
    min-width: 265px;
    font-size: 18px;
    color: #293845;
    margin-bottom: 56px;

    p {
        margin-bottom: 5px;
    }
    input {
        width: 100%;
        height: 51px;
        padding-left: 10px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        margin-bottom: 10px;
        font-size: 18px;

        &::placeholder {
            font-family: Roboto;
            font-style: italic;
            color: #afafaf;
        }
    }
`;
