import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NewStock({newStockName}) {
    const [stockName, setStockName] = useState('');
    const history = useHistory();

    return (
        <div id="newStock" className="row">
            <div className="input-field col s8 m6">
                <input id="name" type="text" className="validate" value={stockName} onChange={(e) => {
                    setStockName(e.currentTarget.value);
                }} />
                <label className="active" htmlFor="name">Name</label>
            </div>
            <div className="col s4">
                <button id="addStock" className="btn waves-effect waves-light blue darken-1" style={{ marginTop: '20px' }} onClick={() => {
                    newStockName(stockName);
                    history.push('/');
                }}>OK</button>
            </div>
        </div>
    );
}
