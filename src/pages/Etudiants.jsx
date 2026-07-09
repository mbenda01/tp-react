import { useState } from 'react';
import useEtudiants from '../hooks/useEtudiants';
import FormulaireEtudiant from '../components/FormulaireEtudiant';

const Etudiants = () => {
  const { etudiants, chargement, erreur, messageSucces, creer, modifier, supprimer } = useEtudiants();
  const [etudiantEdite, setEtudiantEdite] = useState(null);
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  const handleSoumettre = async (data) => {
    const ok = etudiantEdite
      ? await modifier(etudiantEdite.id, data)
      : await creer(data);
    if (ok) {
      setAfficherFormulaire(false);
      setEtudiantEdite(null);
    }
  };

  if (chargement) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '16px' }}>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      {messageSucces && <p style={{ color: 'green' }}>{messageSucces}</p>}

      <button onClick={() => { setAfficherFormulaire(true); setEtudiantEdite(null); }}>
        + Nouvel étudiant
      </button>

      {afficherFormulaire && (
        <FormulaireEtudiant
          etudiant={etudiantEdite}
          onSoumettre={handleSoumettre}
          onAnnuler={() => { setAfficherFormulaire(false); setEtudiantEdite(null); }}
        />
      )}

      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '12px' }}>
        <thead>
          <tr><th>Prénom</th><th>Nom</th><th>Note</th><th>Filière</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {etudiants.map(e => (
            <tr key={e.id}>
              <td>{e.prenom}</td>
              <td>{e.nom}</td>
              <td>{e.note}/20</td>
              <td>{e.filiere}</td>
              <td>
                <button onClick={() => { setEtudiantEdite(e); setAfficherFormulaire(true); }}>Modifier</button>
                <button onClick={() => supprimer(e.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Etudiants;