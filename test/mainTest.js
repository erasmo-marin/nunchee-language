'use strict';

let should = require('chai').should();
let ntl    = require('../build/main.js');

describe('ntl',() => {
    let object = {
        title: {
            original: 'Some title',
            es: 'Un título'
        },
        description: "This is a description string"
    };
    it('should detect if target is a string', () => {
        // ntl return the given parameter if it's not an object
        ntl('es')._(object.description).should.equal(object.description);
    });
    it('should return the original string if the requested language does not exist', () => {
        ntl('ru')._(object.title).should.equal(object.title.original);
    })
    it('should return the requested language', () => {
        ntl('es')._(object.title).should.equal(object.title.es);
    });
    it('should allow a default language usage', () => {
        ntl('es');
        ntl()._(object.title).should.equal('Un título');
    });
});
