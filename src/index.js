const through = require("through2");
const { PluginError } = require("gulp-util");
const replaceExt = require("replace-ext");

module.exports = () => {
  return through.obj((file, enc, cb) => {
    if (file.isNull()) return cb(null, file);
    if (file.isStream())
      throw new PluginError(
        "gulp-sword",
        "Streams not supported at the moment"
      );
    const sword = require("swordcss")();
    const compiled = sword.compile(file.contents.toString());
    file.path = replaceExt(file.path, ".css");
    file.contents = Buffer.from(compiled);
    cb(null, file);
  });
};
