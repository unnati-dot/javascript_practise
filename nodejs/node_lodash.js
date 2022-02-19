const _ = require('lodash');

const items = [1,[2,[3,[4,[5]]]]];

const res = _.flattenDeep(items);
console.log(res);
