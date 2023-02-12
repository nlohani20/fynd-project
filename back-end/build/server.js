"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _path = _interopRequireDefault(require("path"));
var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');
var guserId;
var _require = require('./mongo-connection-util'),
  connectToMongoDB = _require.connectToMongoDB;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use('/images', _express["default"]["static"](_path["default"].join(__dirname, '../assets')));
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../dist'), {
  maxAge: '1y',
  etag: false
}));
app.use((0, _connectHistoryApiFallback["default"])());
app.get('/api/products', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return connectToMongoDB();
        case 2:
          db = _context.sent;
          _context.next = 5;
          return db.collection('products').find({}).toArray();
        case 5:
          products = _context.sent;
          res.status(200).json(products);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//depreciated get
app.get('/api/users/:userId/cart', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userId, db, user, products, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          _context2.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context2.sent;
          _context2.next = 6;
          return db.collection('users').findOne({
            uid: userId
          });
        case 6:
          user = _context2.sent;
          if (user) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(404).json('Could not find user!'));
        case 9:
          _context2.next = 11;
          return db.collection('products').find({}).toArray();
        case 11:
          products = _context2.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/api/cart', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, user, products, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return connectToMongoDB();
        case 2:
          db = _context3.sent;
          _context3.next = 5;
          return db.collection('users').findOne({
            _id: guserId
          });
        case 5:
          user = _context3.sent;
          if (user) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json('Could not find user!'));
        case 8:
          _context3.next = 10;
          return db.collection('products').find({}).toArray();
        case 10:
          products = _context3.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get('/api/products/:productId', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var productId, db, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          productId = req.params.productId;
          _context4.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context4.sent;
          _context4.next = 6;
          return db.collection('products').findOne({
            pid: productId
          });
        case 6:
          product = _context4.sent;
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json('Could not find the product!');
          }
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.get('/api/users', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, users;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return connectToMongoDB();
        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return db.collection('users').find({}).toArray();
        case 5:
          users = _context5.sent;
          res.status(200).json(users);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/api/login', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, email, password, db, users;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context6.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context6.sent;
          _context6.next = 6;
          return db.collection('users');
        case 6:
          users = _context6.sent;
          users.findOne({
            email: email
          }, function (err, user) {
            if (err) return res.status(500).json({
              title: 'server error',
              error: err
            });
            if (!user) return res.status(200).json({
              title: 'login failed',
              error: 'invalid email'
            });
            if (password !== user.password) return res.status(200).json({
              title: 'login failed',
              error: 'invalid password'
            });
            if (password === user.password) {
              guserId = user._id;
              return res.status(200).json({
                title: 'login success',
                user: user
              });
            }
          });
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
app.post('/api/users', /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body2, name, email, password, phone, gender, db, user, users;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password, phone = _req$body2.phone, gender = _req$body2.gender;
          _context7.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context7.sent;
          user = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            gender: gender,
            cartItems: []
          };
          _context7.next = 7;
          return db.collection('users').insertOne(user);
        case 7:
          users = _context7.sent;
          res.status(201).json(user);
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

//depreciated add method
app.post('/api/users/:userId/cart/:productId', /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var userId, productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          userId = req.params.userId;
          productId = req.params.productId;
          _context8.next = 4;
          return connectToMongoDB();
        case 4:
          db = _context8.sent;
          _context8.next = 7;
          return db.collection('users').updateOne({
            uid: userId
          }, {
            $addToSet: {
              cartItems: productId
            }
          });
        case 7:
          _context8.next = 9;
          return db.collection('products').find({}).toArray();
        case 9:
          products = _context8.sent;
          _context8.next = 12;
          return db.collection('users').findOne({
            uid: userId
          });
        case 12:
          user = _context8.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

//depreciated add method
app.post('/api/users/:userId/cart', /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var userId, productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          userId = req.params.userId;
          productId = req.body.productId;
          _context9.next = 4;
          return connectToMongoDB();
        case 4:
          db = _context9.sent;
          _context9.next = 7;
          return db.collection('users').updateOne({
            uid: userId
          }, {
            $addToSet: {
              cartItems: productId
            }
          });
        case 7:
          _context9.next = 9;
          return db.collection('products').find({}).toArray();
        case 9:
          products = _context9.sent;
          _context9.next = 12;
          return db.collection('users').findOne({
            uid: userId
          });
        case 12:
          user = _context9.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
app.post('/api/cart/:productId', /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          productId = req.params.productId;
          _context10.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context10.sent;
          _context10.next = 6;
          return db.collection('users').updateOne({
            _id: guserId
          }, {
            $addToSet: {
              cartItems: productId
            }
          });
        case 6:
          _context10.next = 8;
          return db.collection('products').find({}).toArray();
        case 8:
          products = _context10.sent;
          _context10.next = 11;
          return db.collection('users').findOne({
            _id: guserId
          });
        case 11:
          user = _context10.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
app.post('/api/cart', /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          productId = req.body.productId;
          _context11.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context11.sent;
          _context11.next = 6;
          return db.collection('users').updateOne({
            _id: guserId
          }, {
            $addToSet: {
              cartItems: productId
            }
          });
        case 6:
          _context11.next = 8;
          return db.collection('products').find({}).toArray();
        case 8:
          products = _context11.sent;
          _context11.next = 11;
          return db.collection('users').findOne({
            _id: guserId
          });
        case 11:
          user = _context11.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

//depreciated delete
app["delete"]('/api/users/:userId/cart/:productId', /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var _req$params, userId, productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$params = req.params, userId = _req$params.userId, productId = _req$params.productId;
          _context12.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context12.sent;
          _context12.next = 6;
          return db.collection('users').updateOne({
            uid: userId
          }, {
            $pull: {
              cartItems: productId
            }
          });
        case 6:
          _context12.next = 8;
          return db.collection('products').find({}).toArray();
        case 8:
          products = _context12.sent;
          _context12.next = 11;
          return db.collection('users').findOne({
            uid: userId
          });
        case 11:
          user = _context12.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());
app["delete"]('/api/cart/:productId', /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var productId, db, products, user, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          productId = req.params.productId;
          _context13.next = 3;
          return connectToMongoDB();
        case 3:
          db = _context13.sent;
          _context13.next = 6;
          return db.collection('users').updateOne({
            _id: guserId
          }, {
            $pull: {
              cartItems: productId
            }
          });
        case 6:
          _context13.next = 8;
          return db.collection('products').find({}).toArray();
        case 8:
          products = _context13.sent;
          _context13.next = 11;
          return db.collection('users').findOne({
            _id: guserId
          });
        case 11:
          user = _context13.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (pid) {
            return products.find(function (product) {
              return product.pid === pid;
            });
          });
          res.status(200).json(cartItems);
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../dist/index.html'));
});
app.listen(process.env.PORT || 8000, function () {
  console.log('Server is listening on port 8000');
});