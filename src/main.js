import _ from 'lodash';

const translation = (function translation() {

    let language = 'original';

    function translate(target,override) {
        let lang = override || language;
        if (!target) {
            throw new Error(`Cannot translate target '${target}'`);
        }
        if (target && _.isString(target)) {
            return target;
        }

        return _.has(target,lang) ? target[lang] : target.original;
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
