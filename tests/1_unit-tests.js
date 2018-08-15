/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();


suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32KG';
      assert.equal(convertHandler.getNum(input),'32');
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '32.545L';
      assert.equal(convertHandler.getNum(input),32.545);
      done();
    });
    
    test('Fractional Input', function(done) {
        let input = '32/5L';
        assert.equal(convertHandler.getNum(input),(32/5));
        done();

    });
    
    test('Fractional Input w/ Decimal', function(done) {
        // let input = '32.5/6L'
        // let output = (32.5)/6;
        // assert.equal(convertHandler.getNum(input),output);
        let input = '32/5.6L'
        let output = 32/(5.6);
        assert.equal(convertHandler.getNum(input),output);
        done();

    });
    
    test('Invalid Input (double fraction)', function(done) {
        let input = '32.2/1.2kg';
        assert.equal(convertHandler.getNum(input),false)
        done();

    });
    
    test('No Numerical Input', function(done) {
        let input = 'kg';
        assert.equal(convertHandler.getNum(input),false)
        done();
      //done();
    }); 
    
  });
  //---------------------------------UNITS---------------------------------------------------------------
  suite('Function convertHandler.getUnit(input)', function() {

      test('For Each Valid Unit Inputs first', function(done) {
          var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
          input.forEach(function(ele) {
            assert.equal(convertHandler.getUnit(ele),ele)
          });
          done();
      });
    
    test('Unknown Unit Input', function(done) {
      var input = ['galo','la','mil','kme','lbsu','kgo','GALf','Lg','MIq','KMr','LBSu','KGr'];
        input.forEach(function(ele) {
            assert.equal(convertHandler.getUnit(ele),false)
        });
        done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
        var input = [5, 'L'];
        var expected = 1.320860;
        assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
        done();
    });
    
    test('Mi to Km', function(done) {
        var input = [5, 'mi'];
        var expected = 8.04672;
        assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
        done();
    });
    
    test('Km to Mi', function(done) {
        var input = [5, 'KM'];
        var expected = 3.106855;
        assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
        done();
    });
    
    test('Lbs to Kg', function(done) {
        var input = [5, 'lbs'];
        var expected = 2.26796;
        assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
        done();
    });
    
    test('Kg to Lbs', function(done) {
        var input = [5, 'kg'];
        var expected = 11.02311;
        assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
        done();
    });
    
  });

});