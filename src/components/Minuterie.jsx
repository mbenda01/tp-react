import { useState, useEffect } from 'react';

const Minuterie = () => {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes(s => s + 1); // forme fonctionnelle recommandée
    }, 1000);

    // Nettoyage : évite les fuites mémoire quand le composant disparaît
    return () => clearInterval(timer);
  }, []);

  return <p style={{ color: '#888' }}>Page ouverte depuis {secondes}s</p>;
};

export default Minuterie;