import Header from './components/Header';
import Footer from './components/Footer';
import ListePosts from './components/ListePosts';

function App() {
  return (
    <>
      <Header />
      <main>
        <ListePosts />
      </main>
      <Footer />
    </>
  );
}

export default App;