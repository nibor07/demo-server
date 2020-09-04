process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const dbase = require('../config/db');


describe('GET Productos', () => {
  
  before((done) => {
    dbase.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    dbase.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  xit('OK, no traemos productos', (done) => {
    
    request(app).get('/api/search')
      //.send({ query: '131'})
      .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });

  xit('OK, traemos un producto', (done) => {
    request(app).post('/api/search')
      .send({ query: '131'})
      .then((res) => {
        request(app).get('/api/search')
          .then((res) => {
            const body = res.body;
            expect(body.length).to.equal(1);
            done();
          })
      })
      .catch((err) => done(err));
  });
})