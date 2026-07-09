import { useState } from 'react';

const FormulairePost = ({ onAjout }) => {
  const [titre, setTitre] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titre.trim() || !body.trim()) return;

    await onAjout({ title: titre, body });
    setTitre('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <textarea
        placeholder="Contenu"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
      />
      <button type="submit">Ajouter le post</button>
    </form>
  );
};

export default FormulairePost;