import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import Button from "./Button";

export default function Header(props) {
    const history = useHistory();
    const location = useLocation();
    const [darkMode, setDarkMode] = props.states;

    function toggleTheme() {
        if (darkMode) {
            setDarkMode(false);
            localStorage.setItem("theme", "light");
        } else {
            setDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }
    const isAtHome = location.pathname !== "/";
    return (
        <StyledHeader>
            <Button
                className={isAtHome ? null : "hidden"}
                size="small"
                onClick={isAtHome ? () => history.goBack() : undefined}
            >
                <BackArrow />
            </Button>
            <span>CINEFLEX</span>
            <Button size="small" onClick={toggleTheme}>
                {darkMode ? "☀️" : "🌑"}
            </Button>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 67px;
    left: 0px;
    right: 0px;
    top: 0px;
    padding: 0px 8px;
    background: ${(props) => props.theme.fixedBarColor};
    color: ${(props) => props.theme.logoColor};
    z-index: 1;
    transition: 0.5s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    span {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 44px;
        font-weight: bold;
    }
    .hidden {
        opacity: 0;
    }
    button {
        width: 40px;
        border: none;
    }
`;

const BackArrow = styled.div`
    border: solid ${(props) => props.theme.fontColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
