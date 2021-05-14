import styled from "styled-components";

const Button = styled.button`
    width: ${(props) => (props.size ? "83px" : "225px")};
    border: none;
    height: 43px;
    background: ${(props) => props.theme.accentColor};
    border-radius: 3px;
    font-size: 18px;
    color: #ffffff;
    margin: 0px 8px 8px 0px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Button;
