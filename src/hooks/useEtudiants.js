import { useState, useEffect, useCallback } from 'react';
import etudiantService from '../services/etudiantService';

const useEtudiants = () => {
  const [etudiants, setEtudiants] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [messageSucces, setMessageSucces] = useState('');

  const afficherSucces = (msg) => {
    setMessageSucces(msg);
    setTimeout(() => setMessageSucces(''), 3000);
  };

  // Charger tous les étudiants
  const charger = useCallback(async () => {
    setChargement(true);
    try {
      const data = await etudiantService.getAll();
      setEtudiants(data);
    } catch {
      setErreur('Erreur de chargement');
    } finally {
      setChargement(false);
    }
  }, []);

  useEffect(() => { charger(); }, [charger]);

  // Créer
  const creer = async (data) => {
    try {
      const nouveau = await etudiantService.create(data);
      setEtudiants(prev => [nouveau, ...prev]);
      afficherSucces('Étudiant créé avec succès !');
      return true;
    } catch {
      setErreur('Erreur lors de la création');
      return false;
    }
  };

  // Modifier
  const modifier = async (id, data) => {
    try {
      const modifie = await etudiantService.update(id, data);
      setEtudiants(prev => prev.map(e => e.id === id ? modifie : e));
      afficherSucces('Étudiant modifié !');
      return true;
    } catch {
      setErreur('Erreur lors de la modification');
      return false;
    }
  };

  // Supprimer
  const supprimer = async (id) => {
    if (!window.confirm('Supprimer ?')) return;
    try {
      await etudiantService.remove(id);
      setEtudiants(prev => prev.filter(e => e.id !== id));
      afficherSucces('Étudiant supprimé !');
    } catch {
      setErreur('Erreur lors de la suppression');
    }
  };

  return { etudiants, chargement, erreur, messageSucces, creer, modifier, supprimer };
};

export default useEtudiants;