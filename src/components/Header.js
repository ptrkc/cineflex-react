import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import Button from "./Button";

export default function Header(props) {
    const history = useHistory();
    const location = useLocation();

    function BackButton() {
        return (
            <Button size="small" onClick={() => history.goBack()}>
                <BackArrow />
                Voltar
            </Button>
        );
    }

    return (
        <StyledHeader>
            {location.pathname !== "/" ? <BackButton /> : null}
            CINEFLEX
        </StyledHeader>
    );
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
    z-index: 1;
    button {
        position: absolute;
        left: 5px;
    }
`;

const BackArrow = styled.div`
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
