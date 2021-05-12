import styled from "styled-components";

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

export default function SeatButton(props) {
    const { name, isAvailable, selected } = props.seat;
    const toggleSelection = props.toggleSelection;

    function handleClick(isAvailable) {
        if (isAvailable) {
            toggleSelection(name);
        }
    }

    return (
        <>
            <SeatBtn
                available={isAvailable}
                className={selected ? "selected" : ""}
                onClick={() => handleClick(isAvailable)}
            >
                {name}
            </SeatBtn>
        </>
    );
}
