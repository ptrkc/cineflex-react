import styled from "styled-components";

export default function Spinner() {
    return (
        <SpinnerStyle>
            <div className="loadingio-spinner-eclipse-z1zsdweb55c">
                <div className="ldio-zawb8kvtwrs">
                    <div></div>
                </div>
            </div>
        </SpinnerStyle>
    );
}

const SpinnerStyle = styled.div`
    @keyframes ldio-zawb8kvtwrs {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .ldio-zawb8kvtwrs div {
        position: absolute;
        animation: ldio-zawb8kvtwrs 0.5s linear infinite;
        width: 80px;
        height: 80px;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        box-shadow: 0 6.300000000000001px 0 0 #ff7300;
        transform-origin: 40px 43.15px;
    }
    .loadingio-spinner-eclipse-z1zsdweb55c {
        width: 94px;
        height: 94px;
        display: inline-block;
        overflow: hidden;
    }
    .ldio-zawb8kvtwrs {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(0.94);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-zawb8kvtwrs div {
        box-sizing: content-box;
    }
    /* generated by https://loading.io/ */
`;
