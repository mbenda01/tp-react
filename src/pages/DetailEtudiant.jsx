import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import etudiantService from '../services/etudiantService';

const DetailEtudiant = () => {
  const { id } = useParams();      // string : '42'
  const navigate = useNavigate();
  const [etudiant, setEtudiant] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const charger = async () => {
      try {
        const data = await etudiantService.getById(Number(id));
        setEtudiant(data);
      } catch (err) {
        if (err.response?.status === 404) {
          navigate('/not-found', { replace: true });
        } else {
          setErreur('Erreur de chargement');
        }
      } finally {
        setChargement(false);
      }
    };
    charger();
  }, [id, navigate]); // se relance si l'id change

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p style={{ color: 'red' }}>{erreur}</p>;
  if (!etudiant) return null;

  return (
    <div>
      <Link to="/etudiants">&larr; Retour à la liste</Link>
      <h1>{etudiant.prenom} {etudiant.nom}</h1>
      <p>Note : {etudiant.note}/20</p>
      <p>Filière : {etudiant.filiere}</p>
    </div>
  );
};

export default DetailEtudiant;