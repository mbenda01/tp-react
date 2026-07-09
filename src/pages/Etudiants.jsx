import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      {erreur && <p className="msg-erreur">{erreur}</p>}
      {messageSucces && <p className="msg-succes">{messageSucces}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1>Étudiants</h1>
        <button onClick={() => { setAfficherFormulaire(true); setEtudiantEdite(null); }}>
          + Nouvel étudiant
        </button>
      </div>

      {afficherFormulaire && (
        <FormulaireEtudiant
          etudiant={etudiantEdite}
          onSoumettre={handleSoumettre}
          onAnnuler={() => { setAfficherFormulaire(false); setEtudiantEdite(null); }}
        />
      )}

      <table>
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
              <td style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Link to={`/etudiants/${e.id}`}>Détail</Link>
                <button className="btn-secondary" onClick={() => { setEtudiantEdite(e); setAfficherFormulaire(true); }}>Modifier</button>
                <button className="btn-danger" onClick={() => supprimer(e.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Etudiants;