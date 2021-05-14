import { useState } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import DateAndTime from "./DateAndTime";
import Seats from "./Seats";
import Success from "./Success";
import ResetCSS from "./ResetCSS";
import GlobalStyle from "./GlobalStyle";
import Footer from "./Footer";

export default function App() {
    const [footerData, setFooterData] = useState({
        infoLoaded: false,
    });
    const [ticketsToBuy, setTicketsToBuy] = useState({
        ids: [], // 1,2,3
        compradores: [], // { idAssento: 1, nome: "Fulano", cpf: "12345678900" },
    });

    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Movies states={[footerData, setFooterData]} />
                </Route>
                <Route path="/sessoes/:idMovie">
                    <DateAndTime
                        states={[
                            footerData,
                            setFooterData,
                            ticketsToBuy,
                            setTicketsToBuy,
                        ]}
                    />
                </Route>
                <Route path="/assentos/:idShowtime">
                    <Seats
                        states={[
                            footerData,
                            setFooterData,
                            ticketsToBuy,
                            setTicketsToBuy,
                        ]}
                    />
                </Route>
                <Route path="/sucesso">
                    <Success />
                </Route>
            </Switch>
            <Footer movie={footerData} />
        </BrowserRouter>
    );
}
