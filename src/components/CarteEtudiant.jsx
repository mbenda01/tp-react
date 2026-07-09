import './CarteEtudiant.css';

const CarteEtudiant = ({ nom, prenom, note, filiere, onSelectionner, modeCompact = false }) => {
  // Statut calculé à partir de la note
  let statut = 'rattrapage';
  if (note >= 10) statut = 'admis';
  else if (note < 8) statut = 'recale';

  return (
    <div className="carte-etudiant">
      <h2>{prenom} {nom}</h2>

      {/* Filière masquée en mode compact */}
      {!modeCompact && <p className="filiere">{filiere}</p>}

      <span className="note">Note : {note}/20</span>

      {/* Badge coloré : ternaire pour la couleur */}
      <span className={statut === 'admis' ? 'badge vert' : statut === 'recale' ? 'badge rouge' : 'badge orange'}>
        {statut}
      </span>

      {/* Bouton affiché seulement si note >= 16 (court-circuit &&) */}
      {note >= 16 && <button className="btn-felicitations">Félicitations !</button>}

      {/* Callback vers le parent */}
      <button onClick={() => onSelectionner({ nom, prenom, note, filiere })}>
        Sélectionner
      </button>
    </div>
  );
};

export default CarteEtudiant;