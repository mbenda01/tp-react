import { useState, useEffect } from 'react';

const FormulaireEtudiant = ({ etudiant, onSoumettre, onAnnuler }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [filiere, setFiliere] = useState('');

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
    <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 420, margin: '12px 0' }}>
      <h3>{etudiant ? 'Modifier l\'étudiant' : 'Nouvel étudiant'}</h3>
      <input placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="number" placeholder="Note /20" value={note} onChange={(e) => setNote(e.target.value)} />
      <input placeholder="Filière" value={filiere} onChange={(e) => setFiliere(e.target.value)} />
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit">{etudiant ? 'Enregistrer' : 'Créer'}</button>
        <button type="button" className="btn-secondary" onClick={onAnnuler}>Annuler</button>
      </div>
    </form>
  );
};

export default FormulaireEtudiant;