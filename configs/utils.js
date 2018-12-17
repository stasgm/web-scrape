var path = require ('path');

function getRelativePath(rootPath) {
  return function (args) {
    args = args.slice();
    return path.join.apply(path, [rootPath].concat(args));
  };
}

const getRootRelativePath = getRelativePath(path.resolve(__dirname, '../'));

module.exports = { getRelativePath, getRootRelativePath };
