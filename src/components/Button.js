import styled from "styled-components";

const Button = styled.button`
    width: ${(props) => (props.size ? "83px" : "265px")};
    border: 3px solid ${(props) => props.theme.fontColor};
    height: 43px;
    background: ${(props) => props.theme.bgColor};
    border-radius: 4px;
    font-size: 18px;
    color: ${(props) => props.theme.textColor};
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0px 0px 0px 0px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
`;

export default Button;
