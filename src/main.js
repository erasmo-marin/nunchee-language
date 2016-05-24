import _ from 'lodash';

let ntl = {
    target: {},
    translatable: false,
    translate (language) {
        if (this.translatable) {
            return _.has(this.target,language) ? this.target[language] : this.target.original;
        } else {
            return this.string;
        }
    }
}
let translation = function translation(toTranslate) {
    let ntlOptions = {};
    if (toTranslate instanceof Object) {
        ntlOptions = {
            target: toTranslate,
            translatable: true
        }
    } else {
        ntlOptions = {
            string: toTranslate,
            translatable: false
        }
    }
    return Object.assign(Object.create(ntl), ntlOptions);
};

module.exports = translation;
