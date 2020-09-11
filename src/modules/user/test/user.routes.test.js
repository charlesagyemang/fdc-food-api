import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import User from '../user.model';
import server from '../../../server';

describe('User::Routes', async () => {
  beforeEach(async () => {
    // BEFORE EACH TEST DELETE ALL STUFF IN THE DB
    await nuke();
  });

  it.only('should create user successfully', async () => {
    const res = await request(server).post('/api/user/').send({
      name: 'Kofi',
      email: 'test@email.com',
      password: 'password',
      other: {
        role: 'user',
      },
    });
    expect(res.statusCode).toBe(HTTPStatus.CREATED);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
  });

  it.skip('should login successfully', async () => {
    await User.create({
      name: 'Kofi',
      email: 'test@email.com',
      password: 'password',
    });

    const res = await request(server).post('/api/user/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    // console.log(res.body);

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
  });
});
