'use strict';

const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');

const git = 'https://github.com/pre-view/pre-view.github.io/tree/master';

const template = [
    '[![Twitter](https://img.shields.io/badge/twitter-@qq393464140-blue.svg)](http://twitter.com/qq393464140)',
    '[![](https://img.shields.io/badge/made%20with-%E2%9D%A4-ff69b4.svg)](https://preview.lixinliang.com)',
    '',
    '# pre-view.github.io',
    'https://pre-view.github.io',
    '',
];

const list = klawSync(__dirname, {
    depthLimit: 0,
});

_(list)
.map(({ path }) => path)
.filter(( dirname ) => /^\d+$/.test(path.basename(dirname)))
.sortBy(( dirname ) => -path.basename(dirname))
.forEach(( dirname ) => {

    const year = path.basename(dirname);
    template.push(
        `### ${ year }`,
        '',
    );

    const list = klawSync(dirname, {
        depthLimit: 0,
    });

    _(list)
    .map(({ path }) => path)
    .filter(( dirname ) => /^[a-zA-Z0-9\-]+$/.test(path.basename(dirname)))
    .forEach(( dirname ) => {

        const presentation = path.basename(dirname);
        template.push(presentation);

        const list = klawSync(dirname, {
            depthLimit: 0,
        });

        _(list)
        .map(({ path }) => path)
        .filter(( filename ) => /^(README\.md)|(index\.(html|pdf))+$/.test(path.relative(dirname, filename)))
        .forEach(( filename ) => {

            const file = path.basename(filename);
            template.push(`* ${ git }/${ year }/${ presentation }/${ file }`);

        });

        template.push('');

    });

});

fs.outputFileSync(path.join(__dirname, './README.md'), template.join('\n'));