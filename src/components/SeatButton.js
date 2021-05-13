import styled from "styled-components";

export default function SeatButton(props) {
    const { name, isAvailable, selected } = props.seat;
    const toggleSelection = props.toggleSelection;

    function handleClick() {
        if (isAvailable) {
            toggleSelection(name);
        } else {
            alert("Esse assento não está disponível.");
        }
    }

    return (
        <>
            <SeatBtn
                available={isAvailable}
                className={selected ? "selected" : ""}
                onClick={name ? handleClick : undefined}
            >
                {name}
            </SeatBtn>
        </>
    );
}

const SeatBtn = styled.li`
    background: ${(props) => (props.available ? "#c3cfd9" : "#FBE192")};
    border: 1px solid ${(props) => (props.available ? "#808f9d" : "#F7C52B")};
    border-radius: 50px;
    width: 26px;
    height: 26px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &.selected {
        background: #8dd7cf;
        border: 1px solid #45bdb0;
    }

    @media (min-width: 440px) {
        width: 34px;
        height: 34px;
        font-size: 16px;
    }
`;
