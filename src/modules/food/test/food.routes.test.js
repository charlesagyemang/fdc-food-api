import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import server from '../../../server';

describe('Food::Routes', async () => {
  it.only('should ping foods route successfully', async () => {
    const { body, statusCode } = await request(server).get('/api/food/ping');
    console.log(body);
    expect(statusCode).toBe(HTTPStatus.OK);
    expect(body).toHaveProperty('data');
    expect(body.data).toBe('Ping');
  });
  it.only('should get all foods successfully', async () => {
    const { body } = await request(server).get('/api/food/all');
    console.log(body);
    // expect(statusCode).toBe(HTTPStatus.OK);
    // expect(body).toHaveProperty('data');
    // expect(body.data).toBe('Ping');
  });
});
