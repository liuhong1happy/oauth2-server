var assert = require('assert');
var portTest = require('../utils/portTest');
var request = require('supertest');
var server = request('http://localhost:3002');

beforeEach(function(done) {
    portTest.portIsOccupied(3002).then(result=> {
        if(result) done(result);
        else done();
    }).catch(err=> {
        done(err)
    })
});

describe('upload file', function() {
    it('upload image file', function(done) {
        server
        .post('/api/common/upload')
        .attach('file', 'test/images/pic1.jpg')
        .expect(200, (err, res)=>{
            console.log(JSON.stringify(res.body));
            done(err);
        })
    });
});