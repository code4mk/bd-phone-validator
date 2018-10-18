/**
 * Unit Testing <code4mk>
 * Karma + Jasmine
 * github.com/code4mk
 */

var bdPhone = require("../dist/index.js");

describe('bd phone validation', function () {

  it('01751255100  core_valid is true', function () {
    expect(bdPhone("01751255100").core_valid).toBe(true);
  });
  it('01751255100 input length is 11', function () {
    expect(bdPhone("01751255100").input_length).toBe(11);
  });
  it('8801751255100 input length is 14', function () {
    expect(bdPhone("+8801751255100").input_length).toBe(14);
  });
  it('01251255057 has_operator false', function () {
    expect(bdPhone("01251255057").has_operator).toBe(false);
  });
  it('01751255 need_digit 3 for  11 digit bd number', function () {
    expect(bdPhone("01751255").need_digit).toBe(3);
  });
  it('013712551516787 exceed_digit 6787 ', function () {
    expect(bdPhone("013712551516787").exceed_digit).toBe('6787');
  });
});
