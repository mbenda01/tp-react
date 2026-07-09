import { useState } from 'react';
import FormulaireAjout from './FormulaireAjout';

const ListeEtudiants = () => {
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: 'Mame Mbenda LO', note: 17, filiere: 'Data / AI' },
    { id: 2, nom: 'Awa Diop', note: 12, filiere: 'Génie Logiciel' },
    { id: 3, nom: 'Cheikh Ndiaye', note: 6, filiere: 'Réseaux' },
    { id: 4, nom: 'Fatou Sarr', note: 14, filiere: 'Data / AI' },
  ]);

  // Supprimer : filter crée un nouveau tableau (jamais de mutation)
  const supprimer = (id) => {
    setEtudiants(etudiants.filter(e => e.id !== id));
  };

  // Ajouter : spread pour créer un nouveau tableau
  const ajouterEtudiant = (nouvelEtudiant) => {
    setEtudiants([...etudiants, nouvelEtudiant]);
  };

  // Vider la liste (bonus)
  const viderListe = () => setEtudiants([]);

  // Moyenne calculée en temps réel
  const moyenne = etudiants.length > 0
    ? (etudiants.reduce((somme, e) => somme + e.note, 0) / etudiants.length).toFixed(2)
    : 0;

  return (
    <div style={{ padding: '16px' }}>
      <h2>Liste des étudiants ({etudiants.length})</h2>
      <p>Moyenne de la classe : {moyenne}/20</p>

      <FormulaireAjout onAjout={ajouterEtudiant} />

      {etudiants.length > 0 && (
        <button onClick={viderListe} style={{ marginBottom: '12px' }}>
          Vider la liste
        </button>
      )}

      {/* Message si liste vide */}
      {etudiants.length === 0 && <p>Aucun étudiant.</p>}

      {etudiants.length > 0 && (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Note</th>
              <th>Filière</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map(etudiant => (
              <tr key={etudiant.id}> {/* key OBLIGATOIRE */}
                <td>{etudiant.nom}</td>
                <td>{etudiant.note}/20</td>
                <td>{etudiant.filiere}</td>
                <td>
                  <button onClick={() => supprimer(etudiant.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListeEtudiants;