import styled from "styled-components";
import SeatButton from "./SeatButton";

export default function SeatsGuide() {
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
                <SeatButton seat={{ isAvailable: false, selected: false }} />
                Indisponível
            </div>
        </GuideStyle>
    );
}

const GuideStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px auto 40px;
    max-width: 600px;
    min-width: 265px;
    color: ${(props) => props.theme.textColor};
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        li {
            margin-bottom: 10px;
        }
    }
`;
