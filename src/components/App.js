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
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Themes";
export default function App() {
    const [footerData, setFooterData] = useState({
        infoLoaded: false,
    });
    const [ticketsToBuy, setTicketsToBuy] = useState({
        ids: [],
        compradores: [],
    });

    return (
        <ThemeProvider theme={darkTheme}>
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
                        <Success
                            states={[
                                footerData,
                                setFooterData,
                                ticketsToBuy,
                                setTicketsToBuy,
                            ]}
                        />
                    </Route>
                </Switch>
                <Footer movie={footerData} />
            </BrowserRouter>
        </ThemeProvider>
    );
}
