import { useState, useEffect } from 'react';

const DetailUtilisateur = ({ userId }) => {
  const [utilisateur, setUtilisateur] = useState(null);
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    if (!userId) return; // ne rien faire si aucun id

    const charger = async () => {
      setChargement(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await res.json();
        setUtilisateur(data);
      } finally {
        setChargement(false);
      }
    };
    charger();
  }, [userId]); // se relance chaque fois que userId change

  if (!userId) return <p>Choisissez un utilisateur</p>;
  if (chargement) return <p>Chargement...</p>;
  if (!utilisateur) return null;

  return (
    <div style={{ border: '2px solid #0E9FE7', borderRadius: '8px', padding: '16px' }}>
      <h2>{utilisateur.name}</h2>
      <p>Email : {utilisateur.email}</p>
      <p>Téléphone : {utilisateur.phone}</p>
      <p>Ville : {utilisateur.address.city}</p>
      <p>Entreprise : {utilisateur.company.name}</p>
    </div>
  );
};

export default DetailUtilisateur;