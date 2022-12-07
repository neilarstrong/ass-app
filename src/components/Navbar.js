import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png';

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" ><img src={logo} class="rounded-3" height="100px"
            width="100px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/gallery" style = {{color: 'white'}}>GALLERY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login" style = {{color: 'white'}}>LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/register" style = {{color: 'white'}}>REGISTRATION</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;