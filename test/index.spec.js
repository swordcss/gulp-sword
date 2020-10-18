const { expect } = require("chai");

const path = require("path");

const File = require("vinyl");
const PluginError = require("plugin-error");

const sword = require("../src/index");

describe("gulp-sword", () => {
  it("should change the extension", () => {
    const fakeFile = new File({
      contents: Buffer.from(".a{width:100%;}"),
      path: "/fake/path/style.sw",
    });
    const stream = sword();
    stream.write(fakeFile);
    stream.on("data", (file) => {
      expect(path.extname(file.path)).to.equal(".css");
    });
  });
  it("should return the same file", () => {
    const fakeFile = { isNull: () => true };
    const stream = sword();
    stream.write(fakeFile);
    stream.on("data", (file) => {
      expect(file).to.equal(fakeFile);
    });
  });
  it("should throw an error", () => {
    expect(() => {
      const stream = sword();
      const fakeStream = {
        isNull: () => false,
        isStream: () => true,
      };
      stream.write(fakeStream);
    }).to.throw(PluginError);
  });
  it("should return compiled CSS", () => {
    const fakeFile = new File({
      contents: Buffer.from(".a{sw-id:b;}#b{width:100%;}"),
      path: "/fake/path/style.sw",
    });
    const stream = sword();
    stream.write(fakeFile);
    stream.on("data", (file) => {
      expect(file.isBuffer());
      expect(
        file.contents.toString().replace(/[\\n ]/g, ""),
        ".a{width:100%;}#b{width:100%;}"
      );
    });
  });
});
