const through = require("through2");
const PluginError = require("plugin-error");
const replaceExt = require("replace-ext");

module.exports = (opts) => {
  return through.obj((file, enc, cb) => {
    if (file.isNull()) return cb(null, file);
    if (file.isStream())
      throw new PluginError(
        "gulp-sword",
        "Streams not supported at the moment"
      );
    const sword = require("swordcss")(opts);
    const compiled = sword.compile(file.contents.toString());
    file.path = replaceExt(file.path, ".css");
    file.contents = Buffer.from(compiled);
    cb(null, file);
  });
};
