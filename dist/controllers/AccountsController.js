"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BelvoService = _interopRequireDefault(require("../services/BelvoService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AccountsController {
  async index(request, response) {
    try {
      const {
        linkId
      } = request.query;
      const belvo = await _BelvoService.default.init(request.params.env);
      const accounts = await belvo.accounts.retrieve(linkId);
      return response.status(200).json(accounts);
    } catch (error) {
      let status;

      if (error.statusCode) {
        status = error.statusCode;
      } else {
        status = 500;
      }

      return response.status(status).json(error);
    }
  }

}

exports.default = AccountsController;