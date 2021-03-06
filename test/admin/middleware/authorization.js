const toxy = require('../..')
const expect = require('chai').expect
const supertest = require('supertest')

suite('admin authorization', function () {
  const opts = { apiKey: 'foobar' }
  const admin = toxy.admin(opts)
  const port = 9889
  const adminUrl = 'http://localhost:' + port

  admin.listen(port)

  after(function (done) {
    admin.close(done)
  })

  test('authorize', function (done) {
    supertest(adminUrl)
      .get('/')
      .set('API-Key', 'foobar')
      .expect(200)
      .end(done)
  })

  test('unauthorize', function (done) {
    supertest(adminUrl)
      .get('/')
      .expect(401)
      .end(done)
  })
})
