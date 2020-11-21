import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Stocks from './Stocks';
import NewStock from './NewStock';

const App = () => {
    useEffect(() => {
        window.$('.button-collapse').sideNav();
    }, []);

    const [update, setUpdate] = useState('');
    const [stockNames, setStockNames] = useState([]);

    return (
        <Router>
            <Nav onUpdate={setUpdate} />

            <main>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <Switch>
                            <Route path="/new">
                                <NewStock newStockName={
                                    (stockName) => setStockNames((pre) => [...pre, stockName])
                                }></NewStock>
                            </Route>
                            <Route path="/">
                                <Stocks stockNames={stockNames} update={update}></Stocks>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
