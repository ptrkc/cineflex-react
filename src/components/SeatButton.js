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
    background: ${(props) =>
        props.available
            ? props.theme.availableColor
            : props.theme.unavailableColor};
    border: ${(props) =>
        props.theme.type === "dark" ? "none" : `1px solid black`};
    border-radius: 3px;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.2);
    width: 26px;
    height: 26px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &.selected {
        background: ${(props) => props.theme.selectedColor};
    }

    @media (min-width: 440px) {
        width: 34px;
        height: 34px;
        font-size: 16px;
    }
`;
