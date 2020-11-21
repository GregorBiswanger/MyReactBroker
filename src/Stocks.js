import { useEffect, useState } from 'react';
import Stock from './Stock';

const Stocks = ({stockNames, update}) => {

  const [stocks, setStocks] = useState([]);

   useEffect(() => {
     if (stockNames.length > 0) {
       (async() => {
         const response = await fetch(`https://stockplaceholder.herokuapp.com/api/stocks/${stockNames.join('/')}`);
         const data = await response.json();
         setStocks(data);
       })();
     }
       // WEBSERVICE CAALLLLLL 📞📞📞

   }, [stockNames, update]);

   return (
       <div id="stocks" className="row">
       { stocks.map(stock => <Stock key={stock.name} stock={stock} />) }
        </div>
    );
}

export default Stocks;