import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
    const [allSeats, setAllSeats] = useState([]);

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <BrowserRouter>
                <ResetCSS />
                <GlobalStyle />
                <Header states={[darkMode, setDarkMode]} />
                <Switch>
                    <Route path="/" exact>
                        <Movies
                            states={[
                                footerData,
                                setFooterData,
                                setTicketsToBuy,
                                setAllSeats,
                            ]}
                        />
                    </Route>
                    <Route path="/sessoes/:idMovie">
                        <DateAndTime
                            states={[
                                footerData,
                                setFooterData,
                                setTicketsToBuy,
                                setAllSeats,
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
                                allSeats,
                                setAllSeats,
                            ]}
                        />
                    </Route>
                    <Route path="/sucesso">
                        <Success
                            states={[
                                footerData,
                                setFooterData,
                                ticketsToBuy,
                                allSeats,
                            ]}
                        />
                    </Route>
                </Switch>
                <Footer movie={footerData} />
            </BrowserRouter>
        </ThemeProvider>
    );
}
