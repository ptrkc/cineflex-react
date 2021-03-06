import styled from 'styled-components';

export default function Spinner(props) {
  const { invert } = props;
  return (
    <SpinnerStyle invert={invert}>
      <div className="spinner-middle-div">
        <div />
      </div>
    </SpinnerStyle>
  );
}

const SpinnerStyle = styled.div`
    width: 94px;
    height: 94px;
    overflow: hidden;
    margin: auto;
    z-index: 0.1;

    @keyframes spinner-middle-div {
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
    .spinner-middle-div div {
        position: absolute;
        animation: spinner-middle-div 0.5s linear infinite;
        width: 80px;
        height: 80px;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        box-shadow: 0 6.3px 0 0
            ${(props) => (props.invert ? props.theme.bgColor : props.theme.textColor)};
        transform-origin: 40px 43.15px;
        box-sizing: content-box;
    }
    .spinner-middle-div {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(0.94);
        backface-visibility: hidden;
        transform-origin: 0 0;
    }
    /* generated by https://loading.io/ */
`;
