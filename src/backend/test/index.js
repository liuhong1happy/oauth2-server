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

describe('user api', function() {
    it('user login success', function(done) {
        server
        .post('/api/oauth/user/login')
        .type('application/json')
        .send(JSON.stringify({
            "email": "liuhong1.happy@163.com",
            "password": "123456"
        }))
        .expect(200, (err, res)=>{
            if(res.body.status !== "success") {
                done(res.body)
            } else done(err);
        })
    });
    it('user login error', function(done) {
        server
        .post('/api/oauth/user/login')
        .type('application/json')
        .send(JSON.stringify({
            "email": "12233",
            "password": "123456"
        }))
        .expect(200, (err, res)=>{
            if(res.body.status !== "error") {
                done(res.body)
            } else done(err);
        })
    });
});