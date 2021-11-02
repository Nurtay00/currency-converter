import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {ContextProviders} from "./context/ContextProviders";
import CurrencyConverter from "./pages/CurrencyConverter";
import ConverterResult from "./pages/ConverterResult";

function App() {
    let routes = (
        <Router>
            <Route path="/" exact component={CurrencyConverter}></Route>
            <Route path="/result" exact component={ConverterResult}></Route>
            <Redirect to="/"/>
        </Router>

    );
    return <ContextProviders>
        <div>
            {routes}
        </div>
    </ContextProviders>;
}

export default App;
