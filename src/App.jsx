import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Etudiants from './pages/Etudiants';
import DetailEtudiant from './pages/DetailEtudiant';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/login" element={<Login />} />

          {/* Routes protégées, avec layout partagé */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/etudiants" element={<Etudiants />} />
              <Route path="/etudiants/:id" element={<DetailEtudiant />} />
              <Route path="/profil" element={<Profil />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;