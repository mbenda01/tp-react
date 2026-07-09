import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListeUtilisateurs from './components/ListeUtilisateurs';
import DetailUtilisateur from './components/DetailUtilisateur';
import Minuterie from './components/Minuterie';

function App() {
  const [idSelectionne, setIdSelectionne] = useState(null);

  return (
    <>
      <Header />
      <Minuterie />
      <main style={{ display: 'flex', gap: '24px', padding: '16px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          <ListeUtilisateurs onSelectionner={setIdSelectionne} />
        </div>
        <div style={{ flex: 1 }}>
          <DetailUtilisateur userId={idSelectionne} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;