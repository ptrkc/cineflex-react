import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import DateAndTime from "./DateAndTime";
import Seats from "./Seats";
import Success from "./Success";
import Footer from "./Footer";
import ResetCSS from "./ResetCSS";
import GlobalStyle from "./GlobalStyle";

export default function App() {
    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Movies />
                </Route>
                <Route path="/sessoes/:idMovie">
                    <DateAndTime />
                </Route>
                <Route path="/assentos/:idShowtime">
                    <Seats />
                </Route>
                <Route path="/sucesso">
                    <Success />
                </Route>
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    );
}
