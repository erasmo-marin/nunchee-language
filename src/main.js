import _ from 'lodash';

const translation = (function translation() {

    let language = 'original';

    function translate(target) {
        if (target && _.isString(target)) {
            return target;
        }
        return _.has(target,language) ? target[language] : target.original;
    }

    function init(lang) {
        language = lang || language;
        return {
            _: translate
        };
    }

    return init;
}());

module.exports = translation;
