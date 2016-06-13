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
    it('should detect if target is an object', () => {
        // ntl return the given parameter if it's not an object
        ntl(object.description).translate('es').should.equal(object.description);
    });
    it('should return the original string if the requested language does not exist', () => {
        ntl(object.title).translate('ru').should.equal(object.title.original);
    })
    it('should return the requested language', () => {
        ntl(object.title).translate('es').should.equal(object.title.es);
    });
    it('should receive a language as a parameter',() => {
        ntl(object.title,'es').should.equal('Un título');
    });
    it('should allow a default language usage', () => {
        // ntl().setDefault('es');
        // ntl(object.title).should.equal('Un título');
    })
});
