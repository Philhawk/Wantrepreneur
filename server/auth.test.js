const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

const alice = {
  email: 'alice@secrets.org',
  password: '12345'
}

describe('/api/auth', () => {
  before('create a user', () =>
    db.didSync
      .then(() =>
        User.create(
          {
          name: 'bob',
          email: alice.email,
          password: alice.password
        })
      )
  )

  describe('POST /local/login (username, password)', () => {
    it('succeeds with a valid username and password', () =>
      request(app)
        .post('/api/auth/local/login')
        .send(alice)
        .expect(201)
        .expect('Set-Cookie', /session=.*/)
      )

    it('fails with an invalid username and password', () =>
      request(app)
        .post('/api/auth/local/login')
        .send({email: alice.email, password: 'wrong'})
        .expect(401)
      )
  })

  describe('GET /whoami', () => {
    describe('when logged in,', () => {
      const agent = request.agent(app)
      before('log in', () => agent
        .post('/api/auth/local/login')
        .send(alice))

      it('responds with the currently logged in user', () =>
        agent.get('/api/auth/whoami')
          .set('Accept', 'application/json')
          .expect(200)
          .then(res => expect(res.body).to.contain({
            email: alice.email
          }))
      )
    })

    it('when not logged in, responds with an empty object', () =>
      request(app).get('/api/auth/whoami')
        .expect(200)
        .then(res => expect(res.body).to.eql({}))
    )
  })
})
