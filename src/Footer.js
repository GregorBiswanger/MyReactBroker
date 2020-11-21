const Footer = () => {
  return <footer className="page-footer orange">
    <div className="container">
        <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum optio et consequuntur animi rem! Velit
                    aperiam facere, corrupti quas cum explicabo, similique aut quam incidunt temporibus repellat excepturi
                    adipisci culpa!</p>
            </div>
            <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                    <li><a className="white-text" href="#!">Link 1</a></li>
                    <li><a className="white-text" href="#!">Link 2</a></li>
                    <li><a className="white-text" href="#!">Link 3</a></li>
                    <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
            </div>
            <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                    <li><a className="white-text" href="#!">Link 1</a></li>
                    <li><a className="white-text" href="#!">Link 2</a></li>
                    <li><a className="white-text" href="#!">Link 3</a></li>
                    <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            Made by Gregor Biswanger (C) 2017
        </div>
    </div>
</footer>
}

export default Footer;