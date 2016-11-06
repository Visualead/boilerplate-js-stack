'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var logA = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var i;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < 100)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return console.log('A-' + i);

          case 4:
            i++;
            _context.next = 1;
            break;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function logA() {
    return _ref.apply(this, arguments);
  };
}();

var logB = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var i;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < 100)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return console.log('B-' + i);

          case 4:
            i++;
            _context2.next = 1;
            break;

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function logB() {
    return _ref2.apply(this, arguments);
  };
}();

var _math = require('./math');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

logA();
logB();

var calc = new _math2.default();
console.log(calc.add(1, 2, 3, 4, 5, 6));

console.log((0, _math.cube)(100));

console.log(_math.foo);
//# sourceMappingURL=index.js.map
