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

export default function App() {
    const [footerData, setFooterData] = useState({
        infoLoaded: false,
    });

    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Movies footer={[footerData, setFooterData]} />
                </Route>
                <Route path="/sessoes/:idMovie">
                    <DateAndTime footer={[footerData, setFooterData]} />
                </Route>
                <Route path="/assentos/:idShowtime">
                    <Seats footer={[footerData, setFooterData]} />
                </Route>
                <Route path="/sucesso">
                    <Success />
                </Route>
            </Switch>
            <Footer movie={footerData} />
        </BrowserRouter>
    );
}
