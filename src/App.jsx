import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CarteEtudiant from './components/CarteEtudiant';

function App() {
  const [selectionne, setSelectionne] = useState(null);

  const etudiants = [
    { id: 1, nom: 'LO', prenom: 'Mame Mbenda', note: 17, filiere: 'Data / AI' },
    { id: 2, nom: 'Diop', prenom: 'Awa', note: 12, filiere: 'Génie Logiciel' },
    { id: 3, nom: 'Ndiaye', prenom: 'Cheikh', note: 6, filiere: 'Réseaux' },
  ];

  return (
    <>
      <Header />

      {selectionne && (
        <p style={{ padding: '8px 16px', background: '#e0f2fe' }}>
          Sélectionné : {selectionne.prenom} {selectionne.nom} ({selectionne.note}/20)
        </p>
      )}

      <main style={{ display: 'flex', flexWrap: 'wrap', padding: '16px' }}>
        {etudiants.map(e => (
          <CarteEtudiant
            key={e.id}
            nom={e.nom}
            prenom={e.prenom}
            note={e.note}
            filiere={e.filiere}
            onSelectionner={setSelectionne}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;