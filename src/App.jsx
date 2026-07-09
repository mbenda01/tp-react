import Header from './components/Header';
import Footer from './components/Footer';
import CarteEtudiant from './components/CarteEtudiant';

function App() {
  return (
    <>
      <Header />
      <main style={{ display: 'flex', flexWrap: 'wrap', padding: '16px' }}>
        <CarteEtudiant />
        <CarteEtudiant />
        <CarteEtudiant />
      </main>
      <Footer />
    </>
  );
}

export default App;