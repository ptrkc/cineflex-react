import styled from "styled-components";

const SeatBtn = styled.li`
    background: ${(props) => (props.available ? "#c3cfd9" : "#FBE192")};
    border: 1px solid #808f9d;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    font-size: ${(props) => (props.selected ? "22px" : "11px")};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function SeatButton(props) {
    const { name, isAvailable, selected } = props.seat;
    const toggleSelection = props.toggleSelection;
    return (
        <>
            <SeatBtn
                available={isAvailable}
                selected={selected}
                onClick={() => toggleSelection(name)}
            >
                {name}
            </SeatBtn>
        </>
    );
}
