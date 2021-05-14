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
        <>
            <Title>ASSENTO {key}</Title>
            <InputsStyle>
                <p>Nome do espectador:</p>
                <input
                    type="text"
                    value={
                        ticketsToBuy.compradores.find(
                            (c) => c.idAssento === key
                        ).key
                    }
                    onChange={(e) => updateInfo(e.target.value, "nome")}
                    placeholder="Digite o nome..."
                ></input>
                <p>CPF do espectador:</p>
                <input
                    type="text"
                    value={
                        ticketsToBuy.compradores.find(
                            (c) => c.idAssento === key
                        ).key
                    }
                    onChange={(e) => updateInfo(e.target.value, "cpf")}
                    placeholder="Digite o CPF..."
                ></input>
            </InputsStyle>
        </>
    );
}

const Title = styled.span`
    font-family: ${(props) => props.theme.logoFont};
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
    display: block;
    max-width: 600px;
    min-width: 265px;
    margin: 0px auto;
`;
const InputsStyle = styled.div`
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
            font-family: ${(props) => props.theme.fontFamily};
            font-style: italic;
            color: #afafaf;
        }
    }
`;
