import {Link} from 'react-router-dom';

const Nav = ({onUpdate}) => {

return <nav className="blue darken-1" role="navigation">
  <div className="nav-wrapper container">
    <Link id="logo-container" to="/" className="brand-logo">My Broker</Link>
      <ul className="right hide-on-med-and-down">
          <li onClick={() => onUpdate(Math.random())}><a href="#"><i className="large material-icons">loop</i></a></li>
          <li><Link  to="/new"><i className="large material-icons">add</i></Link></li>
      </ul>

      <ul id="nav-mobile" className="side-nav blue darken-1">
          <li  onClick={() => onUpdate(Math.random())}><a href="#" className="white-text"><i className="large material-icons white-text">loop</i>Aktualisieren</a></li>
          <li><Link to="/new" className="white-text"><i className="large material-icons white-text">add</i>Hinzufügen</Link></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
  </div>
</nav>;
}

export default Nav;