import styled from "styled-components";

export default function Header() {
    return <StyledHeader>CINEFLEX</StyledHeader>;
}

const StyledHeader = styled.div`
    position: fixed;
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
