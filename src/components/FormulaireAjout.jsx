import { useState } from 'react';

const FormulaireAjout = ({ onAjout }) => {
  const [nom, setNom] = useState('');
  const [filiere, setFiliere] = useState('');
  const [note, setNote] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // empêcher le rechargement de la page

    // Validation basique
    if (!nom.trim()) { setErreur('Le nom est requis'); return; }
    if (!filiere.trim()) { setErreur('La filière est requise'); return; }
    if (note === '' || note < 0 || note > 20) { setErreur('Note invalide (0-20)'); return; }

    // Appeler la fonction du parent
    onAjout({ id: Date.now(), nom, filiere, note: Number(note) });

    // Réinitialiser
    setNom('');
    setFiliere('');
    setNote('');
    setErreur('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {erreur && <p style={{ color: 'red', width: '100%' }}>{erreur}</p>}

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filière"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note /20"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default FormulaireAjout;