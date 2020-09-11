import request from 'supertest-as-promised';
import User from '../modules/user/user.model';


// adding a comp parameter to solve async issues
export const login = async (server) => {
  const user = await User.create({ name: 'user', email: 'user@email.com', password: 'password' });
  const res = await request(server).post('/api/user/login').send({
    email: user.email,
    password: user.password,
  });
  return {
    auth: { Authorization: `Bearer ${res.body.token}` },
    user,
  };
};

export const nuke = async () => {
  await User.destroy({ where: {} });
};
