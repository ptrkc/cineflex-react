import styled from "styled-components";
import Movie from "./Movie";

const MoviesList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const Title = styled.p`
    font-size: 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: #293845;
    height: 66px;
    margin-bottom: 32px;
`;
export default function Movies() {
    const getMoviesResponse = [
        {
            id: 1,
            img:
                "https://s3-alpha-sig.figma.com/img/3eb7/25ec/5d9032e800d1ba5c4031922e4693fa09?Expires=1621814400&Signature=fZ2ozCm0fl-pCjyIqotTBTvKsFxTVPY5QHUk5QzNEMyp-3Kq3iU7xc~MIW98XSSkCI4pfBxqQ0vSnPrOHHIcSVJxgIyAlCI0D7wT4hJBqom~KPiqkujBP6HFl-xJnZvdivW3OB2yTdomAG4FX21NWLVZm-Qb8Fv1Jvp71En5Z8T9Vnxrv44Is6EtrQHk0PxzZG25zFOlywv-PWzbIH0pDPn40bqNzc7myJFkN~G2tfOLIyj~8YkbAYiTvMIAFihyzJQpqhCtY-0pZjPb7PmD9~UWcovyDZj6g9vKHdSxuk5L3X6wW6aJIC21tXagT-rA4Tz6MiqfSPSjPPr~h-J9dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "Enola Holmes",
        },
        {
            id: 2,
            img:
                "https://s3-alpha-sig.figma.com/img/427b/57e2/330103f929f790fbce4fcacf75790ddb?Expires=1621814400&Signature=TY5k-OFjW~pPXxB4km2WK13uTOeX2iUh0IiMfuFSgMySRiynL2Qk9G9YuDIxnRAa44uwIZx3IDZT-ReGQjza4bTQlmQoAnBwXh6h1ByuxNbxQqnAnFWf1Ewxx4XqDVGt1PxR~CSNJOPfAWtKl-k015oew3vFrwl-q8bSo2~ERXhzdT2~6etVBnEw3GRgPTHr~t2vFbCx-EkR1ObCywK0w07wFkQYhk8u4ebwpFkbyJHwcBxEcKE4tzmo5pDTJAMrit~rEa9Y-1GyDI0iIeEQ7~R2ePWn5FOZaY8sL03iXc6deZ1EyKaIsrjgLVARwv5Uqj2KRCFEe83ilbABZaphkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "2067",
        },
        {
            id: 3,
            img:
                "https://s3-alpha-sig.figma.com/img/3eb7/25ec/5d9032e800d1ba5c4031922e4693fa09?Expires=1621814400&Signature=fZ2ozCm0fl-pCjyIqotTBTvKsFxTVPY5QHUk5QzNEMyp-3Kq3iU7xc~MIW98XSSkCI4pfBxqQ0vSnPrOHHIcSVJxgIyAlCI0D7wT4hJBqom~KPiqkujBP6HFl-xJnZvdivW3OB2yTdomAG4FX21NWLVZm-Qb8Fv1Jvp71En5Z8T9Vnxrv44Is6EtrQHk0PxzZG25zFOlywv-PWzbIH0pDPn40bqNzc7myJFkN~G2tfOLIyj~8YkbAYiTvMIAFihyzJQpqhCtY-0pZjPb7PmD9~UWcovyDZj6g9vKHdSxuk5L3X6wW6aJIC21tXagT-rA4Tz6MiqfSPSjPPr~h-J9dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "Enola Holmes",
        },
        {
            id: 4,
            img:
                "https://s3-alpha-sig.figma.com/img/427b/57e2/330103f929f790fbce4fcacf75790ddb?Expires=1621814400&Signature=TY5k-OFjW~pPXxB4km2WK13uTOeX2iUh0IiMfuFSgMySRiynL2Qk9G9YuDIxnRAa44uwIZx3IDZT-ReGQjza4bTQlmQoAnBwXh6h1ByuxNbxQqnAnFWf1Ewxx4XqDVGt1PxR~CSNJOPfAWtKl-k015oew3vFrwl-q8bSo2~ERXhzdT2~6etVBnEw3GRgPTHr~t2vFbCx-EkR1ObCywK0w07wFkQYhk8u4ebwpFkbyJHwcBxEcKE4tzmo5pDTJAMrit~rEa9Y-1GyDI0iIeEQ7~R2ePWn5FOZaY8sL03iXc6deZ1EyKaIsrjgLVARwv5Uqj2KRCFEe83ilbABZaphkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "2067",
        },
        {
            id: 5,
            img:
                "https://s3-alpha-sig.figma.com/img/3eb7/25ec/5d9032e800d1ba5c4031922e4693fa09?Expires=1621814400&Signature=fZ2ozCm0fl-pCjyIqotTBTvKsFxTVPY5QHUk5QzNEMyp-3Kq3iU7xc~MIW98XSSkCI4pfBxqQ0vSnPrOHHIcSVJxgIyAlCI0D7wT4hJBqom~KPiqkujBP6HFl-xJnZvdivW3OB2yTdomAG4FX21NWLVZm-Qb8Fv1Jvp71En5Z8T9Vnxrv44Is6EtrQHk0PxzZG25zFOlywv-PWzbIH0pDPn40bqNzc7myJFkN~G2tfOLIyj~8YkbAYiTvMIAFihyzJQpqhCtY-0pZjPb7PmD9~UWcovyDZj6g9vKHdSxuk5L3X6wW6aJIC21tXagT-rA4Tz6MiqfSPSjPPr~h-J9dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "Enola Holmes",
        },
        {
            id: 6,
            img:
                "https://s3-alpha-sig.figma.com/img/427b/57e2/330103f929f790fbce4fcacf75790ddb?Expires=1621814400&Signature=TY5k-OFjW~pPXxB4km2WK13uTOeX2iUh0IiMfuFSgMySRiynL2Qk9G9YuDIxnRAa44uwIZx3IDZT-ReGQjza4bTQlmQoAnBwXh6h1ByuxNbxQqnAnFWf1Ewxx4XqDVGt1PxR~CSNJOPfAWtKl-k015oew3vFrwl-q8bSo2~ERXhzdT2~6etVBnEw3GRgPTHr~t2vFbCx-EkR1ObCywK0w07wFkQYhk8u4ebwpFkbyJHwcBxEcKE4tzmo5pDTJAMrit~rEa9Y-1GyDI0iIeEQ7~R2ePWn5FOZaY8sL03iXc6deZ1EyKaIsrjgLVARwv5Uqj2KRCFEe83ilbABZaphkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            name: "2067",
        },
    ];
    return (
        <>
            <Title>Selecione o filme</Title>
            <MoviesList>
                {getMoviesResponse.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
            </MoviesList>
        </>
    );
}
