import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import Dates from "./Dates";
import Seats from "./Seats";
import Success from "./Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/contato" exact={true} component={Movies} />
                <Route path="/filme" exact={true} component={Dates} />
                <Route path="/sessao" exact={true} component={Seats} />
                <Route path="/sucesso" exact={true} component={Success} />
            </Switch>
        </BrowserRouter>
    );
}
