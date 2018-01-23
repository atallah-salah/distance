// jasmine test
// indexSpec file for test index.js including hamming.js Levenshtein.js
// mainFunc for call main function in index.js

// group hamming test
describe("test hamming class", function() {
  // substitute test
  it("test substitute should equal 1 with input ('1','8')", function() {
    mainFunc=  main('1','8');
    expect(mainFunc).toEqual(1);
  });
  it("test removeSpace should equal 1 with input ('1 1','11')", function() {
    // removeSpace test
    mainFunc=  main('1 1','11');
    expect(mainFunc).toEqual(1);
  });
});

// group Levenshtein test
describe("test Levenshtein class", function() {
  // insert test
  it("test insert  should equal 1 with input ('11','1')", function() {
    mainFunc=  main('11','1');
    expect(mainFunc).toEqual(1);
  });
  it("test delete  should equal 1 with input ('11111111111141241111','1')", function() {
    // delete test
    mainFunc=  main('11111111111141241111','1');
    expect(mainFunc).toEqual(1);
  });
});

// test all method
describe("test all", function() {
  // test all
  it("substitute removeSpace delete - should equal 6 with input ('1 3 gergerglk5 54g488888888887654456789u765rfghj','823')", function() {
    mainFunc=  main('1 3 gergerglk5 54g488888888887654456789u765rfghj','823');
    expect(mainFunc).toEqual(6);
  });
  it("substitute removeSpace insert should equal 7 with input ('11','117hku7tg')", function() {
    mainFunc=  main('11','117hku7tg');
    expect(mainFunc).toEqual(7);
  });
});
