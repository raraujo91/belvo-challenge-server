"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

var _AccountsController = _interopRequireDefault(require("../controllers/AccountsController"));

var _BalancesController = _interopRequireDefault(require("../controllers/BalancesController"));

var _OwnersController = _interopRequireDefault(require("../controllers/OwnersController"));

var _TransactionsController = _interopRequireDefault(require("../controllers/TransactionsController"));

var _DestroyLinkController = _interopRequireDefault(require("../controllers/DestroyLinkController"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authController = new _AuthController.default();
const accountsController = new _AccountsController.default();
const balancesController = new _BalancesController.default();
const ownersController = new _OwnersController.default();
const transactionsController = new _TransactionsController.default();
const destroyController = new _DestroyLinkController.default();
const routes = (0, _express.Router)();
routes.use('/:env/accounts', accountsController.index);
routes.use('/:env/auth', authController.index);
routes.use('/:env/balance', balancesController.index);
routes.use('/:env/owners', ownersController.index);
routes.use('/:env/transactions', transactionsController.index);
routes.use('/:env/destroy', destroyController.index);
var _default = routes;
exports.default = _default;