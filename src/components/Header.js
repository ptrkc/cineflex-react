import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #c3cfd9;
    color: #e8833a;
    font-size: 34px;
`;

export default function Header() {
    return <StyledHeader>CINEFLEX</StyledHeader>;
}
