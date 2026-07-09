import { useState, useEffect } from 'react';

const FormulaireEtudiant = ({ etudiant, onSoumettre, onAnnuler }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [filiere, setFiliere] = useState('');

  // Pré-remplir si édition (etudiant non null)
  useEffect(() => {
    if (etudiant) {
      setNom(etudiant.nom);
      setPrenom(etudiant.prenom);
      setNote(etudiant.note);
      setFiliere(etudiant.filiere);
    } else {
      setNom(''); setPrenom(''); setNote(''); setFiliere('');
    }
  }, [etudiant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim() || !prenom.trim()) return;
    onSoumettre({ nom, prenom, note: Number(note), filiere });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px', margin: '12px 0', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>{etudiant ? 'Modifier' : 'Nouvel étudiant'}</h3>
      <input placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="number" placeholder="Note /20" value={note} onChange={(e) => setNote(e.target.value)} />
      <input placeholder="Filière" value={filiere} onChange={(e) => setFiliere(e.target.value)} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit">{etudiant ? 'Enregistrer' : 'Créer'}</button>
        <button type="button" onClick={onAnnuler}>Annuler</button>
      </div>
    </form>
  );
};

export default FormulaireEtudiant;