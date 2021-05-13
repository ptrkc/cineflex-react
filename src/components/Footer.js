import styled from "styled-components";
import Movie from "./Movie";

export default function Footer(props) {
    const { title, weekday, name, infoLoaded } = props.movie;
    console.log(props);
    return (
        <StyledFooter infoLoaded={infoLoaded}>
            <div>
                <Movie movie={props.movie} />
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
    background: #dfe6ed;
    border-top: 1px solid #9eadba;
    transition: 1s;

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
        font-size: 26px;
        line-height: 30px;
        display: flex;
        color: #293845;
        margin-left: 14px;
    }
`;
