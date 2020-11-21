export default function Stock({ stock }) {
    return (
        <div id="cardTemplate" className="col s12 m6">
            <div className="card hoverable blue darken-1">
                <div className="card-content white-text">
                    <span className="card-title" style={{ marginBottom: '0px' }}>{`${stock.name} (${stock.symbol})`}</span>
                    <div id="DateTime">{`${stock.lastTradeDate} - ${stock.lastTradeTime}`}</div>

                    <div id="LastTradePrice" className="col s6" style={{ paddingLeft: 0, fontSize: '22px' }}>{`${stock.lastTradePriceOnly} ${stock.currency}`}</div>
                    <div id="Change" className={"col offset-s2 s2 " + (stock.change < 0 ? 'red' : 'green')}>{`${stock.change}`}</div>
                    <div id="ChangeinPercent" className={"col s2" + (stock.changeinPercent < 0 ? 'red' : 'green')}>{`${stock.changeinPercent}`}</div>
                </div>
                <div className="card-action">
                    <a href="#">Merken</a>
                    <a href="#">Kaufen</a>
                </div>
            </div>
        </div>)
}