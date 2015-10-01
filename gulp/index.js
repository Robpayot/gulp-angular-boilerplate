// Import js files

var importer = require('importer');
var moduleExports = importer.require('gulp/config.js');


// Running all tasks in gulp/tasks, including subfolders

var requireDir = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});