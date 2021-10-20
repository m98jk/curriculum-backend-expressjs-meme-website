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
            console.log(res)
            expect(res.text).to.include('Meme Store');
            done();
        });
    });
});

// describe("POST /memes", () => {
//     it("respond with 201 created",(done) => {
//       const meme = {
//         name: "A new post",
//         imgSource: "Lorem ipsum lorem ipsum",
//         genre: ["blog", "lifestyle"],
//         id:"4"
//       };
  
//       request
//         .post("/memes")
//         .set("Content-Type", "application/json")
//         .send(meme)
//         .expect("Content-Type", /json/)
//         .expect(201, (err, res) => {
//           if (err) return done(err);
//           // use exact insitead of to be a 
//           expect(res.body.name).to.be.a("string");
//           expect(res.body.imgSource).to.be.a("string");
//           expect(res.body.genre).to.be.a("array");
//           done();
//         });
//     });
  
//     it('respond with 400 not created when id is not passed',(done) => {
//       const meme = {
//         name: "A new post",
//         imgSource: "Lorem ipsum lorem ipsum",
//         genre: ["blog", "lifestyle"],
//       };
  
//       request
//           .post('/memes')
//           .send(meme)
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(400)
//           .expect('"meme not created"')
//           .end((err) => {
//               if (err) return done(err);
//               done();
//           });
//   });