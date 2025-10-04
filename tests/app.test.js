const supertest = require('supertest');

const request = supertest; // Assignation explicite pour éviter l'erreur no-undef
const app = require('../index');

describe('Test endpoint /', () => {
  it('should return 200 and Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello Docker + CI/CD!');
  });
});
