'use strict';

const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');

const template = [
    '[![Twitter](https://img.shields.io/badge/twitter-@qq393464140-blue.svg)](http://twitter.com/qq393464140)',
    '[![](https://img.shields.io/badge/made%20with-%E2%9D%A4-ff69b4.svg)](https://preview.lixinliang.com)',
    '',
    '# pre-view.github.io',
    'https://pre-view.github.io',
];

const list = klawSync(__dirname, {
    depthLimit: 0,
});

_(list)
.map(({ path }) => path)
.filter(( dirname ) => /^\d+$/.test(path.basename(dirname)))
.forEach(( dirname ) => {
    const list = klawSync(dirname, {
        depthLimit: 1,
    });

    const map = {};

    _(list)
    .map(({ path }) => path)
    .filter(( filename ) => /^[a-zA-Z0-9\-]+\/(README\.md)|(index\.(html|pdf))$/.test(path.relative(dirname, filename)))
    .forEach(( filename ) => {
        const project = path.dirname(path.relative(dirname, filename));
        map[project] = map[project] || [];
        map[project].push(path.relative(__dirname, filename));
    });

    const year = path.basename(dirname);

    console.log(year, map);

    // path.relative(dirname, filename)

    // fragment.push(
    //     `* ${ path.relative(__dirname, filename) }`
    // );

    // if (fragment.length) {
    //     [].push.apply(template, fragment);
    // }


    // if (!fragment.length) {
    //     fragment.push(
    //         '',
    //         '---',
    //         '',
    //         `### ${ path.basename(dirname) }`,
    //         '',
    //     );
    // }

});

template.push(
    '',
    '<!-- test -->',
    '',
);

fs.outputFileSync(path.join(__dirname, './README.md'), template.join('\n'));