import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/accueil">MonApp</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/accueil" className={({ isActive }) => isActive ? 'lien actif' : 'lien'}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/etudiants" className={({ isActive }) => isActive ? 'lien actif' : 'lien'}>
            Étudiants
          </NavLink>
        </li>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;