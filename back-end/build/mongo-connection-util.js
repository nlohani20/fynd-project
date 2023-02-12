"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// import { MongoClient } from 'mongodb';

var _require = require('mongodb'),
  MongoClient = _require.MongoClient;
var connectToMongoDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var url, client, db;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = 'mongodb+srv://nlohani20:Niraj%40Mongodb@cluster0.3zzf4sv.mongodb.net/?retryWrites=true&w=majority';
          _context.next = 3;
          return MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        case 3:
          client = _context.sent;
          db = client.db('garden');
          return _context.abrupt("return", db);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function connectToMongoDB() {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  connectToMongoDB: connectToMongoDB
};