import { Outlet, NavLink } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => (
  <div className="dashboard-layout">
    <aside className="sidebar">
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'actif' : ''}>Accueil</NavLink>
      <NavLink to="/etudiants" className={({ isActive }) => isActive ? 'actif' : ''}>Étudiants</NavLink>
      <NavLink to="/profil" className={({ isActive }) => isActive ? 'actif' : ''}>Mon profil</NavLink>
    </aside>
    <main className="contenu">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;