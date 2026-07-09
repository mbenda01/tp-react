import api from '../api/axios';

const postService = {
  // GET /posts
  getAll: async () => {
    const reponse = await api.get('/posts');
    return reponse.data;
  },
  // GET /posts/:id
  getById: async (id) => {
    const reponse = await api.get(`/posts/${id}`);
    return reponse.data;
  },
  // POST /posts
  create: async (data) => {
    const reponse = await api.post('/posts', data);
    return reponse.data;
  },
  // DELETE /posts/:id
  remove: async (id) => {
    await api.delete(`/posts/${id}`);
  },
};

export default postService;