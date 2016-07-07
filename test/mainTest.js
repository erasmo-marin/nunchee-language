'use strict';

let should = require('chai').should();
let ntl    = require('../build/main.js');

describe('ntl',() => {
    let object = {
        title: {
            original: 'Some title',
            es: 'Un título',
            fr: 'Certains titres'
        },
        description: "This is a description string"
    };
    it('should detect if target is a string', () => {
        // ntl return the given parameter if it's not an object
        return ntl('es')._(object.description).should.equal(object.description);
    });
    it('should return the original string if the requested language does not exist', () => {
        return ntl('ru')._(object.title).should.equal(object.title.original);
    })
    it('should return the requested language', () => {
        return ntl('es')._(object.title).should.equal(object.title.es);
    });
    it('should allow a default language usage', () => {
        return ntl('es');
        return ntl()._(object.title).should.equal('Un título');
    });
    it('should allow to use a language just one time', () => {
        // default is already set to 'es'
        return ntl()._(object.title,'fr').should.equal('Certains titres');
    });
    it('should throw an error when target is not an object or an string', () => {
        return (() => { ntl()._(null); }).should.Throw(Error);
    });
});
