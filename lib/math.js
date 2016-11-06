"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = exports.cube = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is Kinda special because I want to use instances of calculator + nice example of eslint exceptions  [SagiN]
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["multiply", "add", "divide", "pow","subtract"] }] */

var Calculator = function () {
  function Calculator() {
    (0, _classCallCheck3.default)(this, Calculator);
  }

  (0, _createClass3.default)(Calculator, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var sum = 0;

      Object.keys(args).forEach(function (key) {
        if (args[key]) {
          sum += args[key];
        }
      });

      return sum;
    }
  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var sum = 0;

      Object.keys(args).forEach(function (key) {
        if (args[key]) {
          sum *= args[key];
        }
      });

      return sum;
    }
  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var sum = 0;

      Object.keys(args).forEach(function (key) {
        if (args[key]) {
          sum -= args[key];
        }
      });

      return sum;
    }
  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var sum = 0;

      Object.keys(args).forEach(function (key) {
        if (args[key]) {
          sum /= args[key];
        }
      });

      return sum;
    }
  }, {
    key: "pow",
    value: function pow() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var sum = 1;

      Object.keys(args).forEach(function (key) {
        if (args[key]) {
          sum = sum ** args[key];
        }
      });

      return sum;
    }
  }]);
  return Calculator;
}();

function cube(x) {
  return x * x * x;
}
var foo = Math.PI + Math.SQRT2;

exports.default = Calculator;
exports.cube = cube;
exports.foo = foo;
//# sourceMappingURL=math.js.map
