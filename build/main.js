'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ntl = {
    target: {},
    translatable: false,
    translate: function translate(language) {
        if (this.translatable) {
            return _lodash2.default.has(this.target, language) ? this.target[language] : this.target.original;
        } else {
            return this.string;
        }
    },
    setDefault: function setDefault(language) {
        this.default = language;
    }
};
var translation = function translation(toTranslate, language) {
    var ntlOptions = {};
    if (toTranslate instanceof Object) {
        ntlOptions = {
            target: toTranslate,
            translatable: true
        };
    } else {
        ntlOptions = {
            string: toTranslate,
            translatable: false
        };
    }
    if (language) {
        var translator = Object.assign(Object.create(ntl), ntlOptions);
        return translator.translate(language);
    }
    return Object.assign(Object.create(ntl), ntlOptions);
};

module.exports = translation;
//# sourceMappingURL=main.js.map
