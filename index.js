var gutil      = require('gulp-util');
var through    = require('through2');
var kraftverk  = require('kraftverk');

var Kraftverk;
var pluginName = 'gulp-kraftverk';
var files      = {};

var onError = function(err) {
	this.emit('error', new gutil.PluginError(pluginName, err));
};

var onFile = function(file, encoding, cb) {
	if (file.isNull())   return cb(null);
	if (file.isStream()) return cb(new gutil.PluginError(pluginName, 'Streaming not supported'));

	files[file.path] = file.contents.toString('utf8');

	cb();
};

var onFiles = function() {
	Kraftverk.generate(files)
		.then(onKraftverkFiles.bind(this))
		.catch(onError.bind(this));
};

var onKraftverkFiles = function(files) {
	var file;

	for (var path in files) {
		file = new gutil.File({
			path     : path,
			contents : new Buffer(files[path])
		});

        this.emit('data', file);
	}

    this.emit('end');
};

module.exports = function(opts) {
	Kraftverk = kraftverk(opts);

	return through.obj(onFile, onFiles);
};
