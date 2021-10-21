let request = require('supertest');
request = request("http://localhost:3000");

const expect = require("chai").expect;

describe('GET /', () => {
    it('renders the index.js',(done) => {
      request
        .get('/')
        .set('Accept', 'text/html')
        .expect('Content-Type', /html/)
        .expect(200, (err,res) => {
            expect(res.text).to.include('Meme Store');
            done();
        });
    });
});

describe('GET /add-meme', () => {
    it('includes a form with POST request to /memes',(done) => {
      request
        .get('/add-meme')
        .set('Accept', 'text/html')
        .expect('Content-Type', /html/)
        .expect(200, (err,res) => {
            expect(res.text).to.include('form');
            expect(res.text).to.include('action="/memes"');
            expect(res.text).to.include('method="POST"');
            done();
        });
    });
});

describe("POST /memes", () => {
    it("redirect to /",(done) => {
      const meme = {
        name: "A new post",
        imgSource: "Lorem ipsum lorem ipsum",
        id:"4"
      };
  
      request
        .post("/memes")
        .set("Content-Type", "application/json")
        .send(meme)
        .expect("Content-Type", "text/plain; charset=utf-8")
        .expect(302, (err, res) => {
          if (err) return done(err);
          expect(res.text).to.be.equal('Found. Redirecting to /')
          done();
        });
    });
});