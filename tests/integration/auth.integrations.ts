import { expect } from 'chai';
import request from 'supertest';
import app from '../../app/server';

describe('Login API', () => {
  it('should login successfully', (done) => {
    request(app)
      .post('/api/v1/login')
      .set('Accept', 'application/json')
      .send({
        username: 'testUser'
      })
      .end((req, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.code).to.be.equal(200);
        expect(res.body.message).to.be.equal('Login Successful');
        expect(res.body.status).to.be.equal('success');
        done();
      });
  });
});
