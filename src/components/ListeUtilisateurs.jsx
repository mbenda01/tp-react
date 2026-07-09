import { useState, useEffect } from 'react';

const ListeUtilisateurs = ({ onSelectionner }) => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const charger = async () => {
      try {
        setChargement(true);
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!reponse.ok) throw new Error('Erreur réseau');
        const data = await reponse.json();
        setUtilisateurs(data);
      } catch (err) {
        setErreur(err.message);
      } finally {
        setChargement(false);
      }
    };
    charger();
  }, []); // [] = une seule fois au montage (comme ngOnInit)

  // Les 3 états
  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p style={{ color: 'red' }}>Erreur : {erreur}</p>;

  return (
    <div>
      <h2>Utilisateurs ({utilisateurs.length})</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {utilisateurs.map(user => (
          <div
            key={user.id}
            onClick={() => onSelectionner(user.id)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              width: '220px',
              cursor: 'pointer',
              background: '#f9f9f9',
            }}
          >
            <h3>{user.name}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{user.email}</p>
            <p style={{ color: '#0354A9' }}>{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeUtilisateurs;