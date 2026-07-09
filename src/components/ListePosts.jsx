import { useState, useEffect } from 'react';
import postService from '../services/postService';
import FormulairePost from './FormulairePost';

const ListePosts = () => {
  const [posts, setPosts] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState('');

  // Charger au montage
  useEffect(() => {
    const charger = async () => {
      try {
        const data = await postService.getAll();
        setPosts(data.slice(0, 10)); // garder 10 posts
      } catch (err) {
        gererErreur(err);
      } finally {
        setChargement(false);
      }
    };
    charger();
  }, []);

  // Gestion d'erreur Axios selon le code HTTP
  const gererErreur = (err) => {
    if (err.response) {
      const status = err.response.status;
      if (status === 401) setErreur('Non autorisé - veuillez vous connecter');
      else if (status === 403) setErreur('Accès interdit');
      else if (status === 404) setErreur('Ressource introuvable');
      else setErreur(`Erreur ${status}`);
    } else if (err.request) {
      setErreur('Serveur inaccessible. Vérifiez votre connexion.');
    } else {
      setErreur('Erreur inattendue : ' + err.message);
    }
  };

  // Ajouter : POST puis ajout en tête de liste
  const ajouter = async (data) => {
    try {
      const nouveau = await postService.create(data);
      // JSONPlaceholder renvoie id:101 pour tout POST → on force un id unique
      setPosts(prev => [{ ...nouveau, id: Date.now() }, ...prev]);
    } catch (err) {
      gererErreur(err);
    }
  };

  // Supprimer : appel API + retrait visuel
  const supprimer = async (id) => {
    if (!window.confirm('Supprimer ce post ?')) return;
    try {
      await postService.remove(id);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      gererErreur(err);
    }
  };

  // Filtrage local (bonus) sur le titre
  const postsFiltres = posts.filter(p =>
    p.title.toLowerCase().includes(recherche.toLowerCase())
  );

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p style={{ color: 'red' }}>{erreur}</p>;

  return (
    <div style={{ padding: '16px' }}>
      <h2>Posts ({postsFiltres.length})</h2>

      <FormulairePost onAjout={ajouter} />

      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        style={{ marginBottom: '12px', width: '100%', maxWidth: '400px' }}
      />

      {postsFiltres.map(post => (
        <div key={post.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
          <h3>{post.title}</h3>
          <p style={{ color: '#666' }}>{post.body}</p>
          <button onClick={() => supprimer(post.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default ListePosts;