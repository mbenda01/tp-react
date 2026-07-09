import { useState, useEffect } from 'react';

const useLocalStorage = (key, valeurInitiale) => {
  const [valeur, setValeur] = useState(() => {
    const stocke = localStorage.getItem(key);
    return stocke ? JSON.parse(stocke) : valeurInitiale;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valeur));
  }, [key, valeur]);

  return [valeur, setValeur];
};

export default useLocalStorage;