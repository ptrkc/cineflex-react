import styled from "styled-components";
import Movie from "./Movie";

export default function Footer(props) {
    const { title, weekday, name, infoLoaded } = props.movie;
    return (
        <StyledFooter infoLoaded={infoLoaded}>
            <div>
                <Movie movie={{ ...props.movie, small: true }} />
                <div className="showtime-info">
                    <div>{title}</div>
                    <div>{weekday && name ? `${weekday} - ${name}` : ""}</div>
                </div>
            </div>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    position: fixed;
    height: 117px;
    right: 0;
    left: 0;
    bottom: ${(props) => (!props.infoLoaded ? "-117px" : "0")};
    background: ${(props) => props.theme.fixedBarColor};
    font-size: 20px;
    border-top: 1px solid #9eadba;
    transition: 0.5s;
    box-shadow: ${(props) =>
        !props.infoLoaded ? "none" : "0px -4px 10px rgba(0, 0, 0, 0.5)"};

    & > div {
        max-width: 600px;
        margin: 0px auto;
        display: flex;
        align-items: center;
        padding: 0px 3px;
        height: 100%;
    }
    .showtime-info {
        flex-direction: column;
        line-height: 30px;
        display: flex;
        color: ${(props) => props.theme.accentColor};
        margin-left: 14px;
    }
`;
