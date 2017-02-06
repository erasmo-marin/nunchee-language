'use strict';

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {
    has: _has2.default,
    isString: _isString2.default,
    isObject: _isObject2.default
};

var translation = function translation() {

    var language = 'original';

    function translate(target, override) {
        var lang = override || language;
        if (!_.isString(target) && !_.isObject(target)) {
            throw new Error('Cannot translate target \'' + target + '\'');
        }
        if (target && _.isString(target)) {
            return target;
        }

        return _.has(target, lang) ? target[lang] : target.original;
    }

    function init(lang) {
        language = lang || language;
        return {
            _: translate
        };
    }

    return init;
}();

module.exports = translation;
//# sourceMappingURL=main.js.map
