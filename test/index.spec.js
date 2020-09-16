const { expect } = require("chai");

const File = require("vinyl");

const sword = require("../src/index");

describe("gulp-sword", () => {
  it("should return the same file", () => {
    const fakeFile = { isNull: () => true };
    const stream = sword();
    stream.write(fakeFile);
    stream.on("data", (file) => {
      expect(file).to.equal(fakeFile);
    });
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
