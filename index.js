
var env = require('./src/environment');
var compiler = require('./src/compiler');
var parser = require('./src/parser');
var lexer = require('./src/lexer');
var loaders = require('./src/loaders');

module.exports = {};
module.exports.Environment = env.Environment;
module.exports.Template = env.Template;

module.exports.loaders = loaders;
module.exports.compiler = compiler;
module.exports.parser = parser;
module.exports.lexer = lexer;