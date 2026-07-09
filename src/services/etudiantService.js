import api from '../api/axios';

const etudiantService = {
  // GET /users (on mappe vers un format étudiant)
  getAll: async () => {
    const reponse = await api.get('/users');
    return reponse.data.slice(0, 5).map(u => ({
      id: u.id,
      nom: u.name.split(' ')[1] || u.name,
      prenom: u.name.split(' ')[0],
      note: 10 + (u.id % 11),        // note fictive 10-20
      filiere: u.company.name,
    }));
  },
  // POST simulé (JSONPlaceholder ne persiste pas)
  create: async (data) => {
    const reponse = await api.post('/users', data);
    return { ...data, id: reponse.data.id || Date.now() };
  },
  // PUT simulé
  update: async (id, data) => {
    await api.put(`/users/${id}`, data);
    return { ...data, id };
  },
  // DELETE simulé
  remove: async (id) => {
    await api.delete(`/users/${id}`);
  },
};

export default etudiantService;