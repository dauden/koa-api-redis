process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const {server} = require('./bin/www');

describe('routes : index', () => {
    describe('POST /', () => {
        after(function (done) {
            server.close();
            done();
        });

        it('should return json', (done) => {
            chai.request(server)
                .post('/')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    res.type.should.eql('application/json');
                    res.body.status.should.equal(201);
                    res.body.message.should.eql(false);
                    done();
                });
        });
    });

});