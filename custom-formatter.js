'use strict';

const {createFormatter} = require('@textlint/linter-formatter');

/**
 * @param {import('@textlint/types').TextlintResult[]} results
 * @returns {string}
 */
module.exports = (results) => {
    const junit = createFormatter({
        formatterName: 'junit',
    });
    const xml = junit(results);

    return xml;
};
