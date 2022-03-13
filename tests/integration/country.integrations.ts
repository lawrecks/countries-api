import { expect } from 'chai';
import request from 'supertest';
import nock from 'nock';
import app from '../../app/server';
import config from '../../app/config';
import countryMock from '../mocks/country.mock';
import ratesMock from '../mocks/rates.mock';


describe('Country', () => {
  it('should get country by name successfully', (done) => {
    nock('https://restcountries.com')
    .get('/v3.1/name/Germany?fullText=true')
    .reply(200, countryMock);

    nock('http://data.fixer.io/api')
    .get(`/latest?access_key=${config.FIXER_API_KEY}&base=EUR&symbols=SEK`)
    .reply(200, ratesMock);

    request(app)
      .post('/graphql')
      .set('Accept', 'application/json')
      .set('Authorization', process.env.ACCESS_TOKEN || '')
      .send({
        query: `{ 
          country(name: "Germany") {
          name
          full_name
          currencies {
              code
              exchange_rates {
                  SEK
              }
          }
          population
          } 
        }`,
      })
      .end((req, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('country');
        done();
      });
  });

  it('should not get country without access token', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `{ 
          country(name: "Germany") {
          name
          full_name
          currencies {
              code
              exchange_rates {
                  SEK
              }
          }
          population
          } 
        }`,
      })
      .end((req, res) => {
        expect(res.body).to.have.property('errors');
        expect(res.body.errors[0].message).to.be.equal('Unauthorized!');
        done();
      });
  });
});
