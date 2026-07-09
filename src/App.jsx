import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Etudiants from './pages/Etudiants';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Redirection de / vers /accueil */}
          <Route path="/" element={<Navigate to="/accueil" replace />} />

          <Route path="/accueil" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/etudiants" element={<Etudiants />} />

          {/* 404 : capture tout le reste */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;