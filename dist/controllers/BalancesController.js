"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BelvoService = _interopRequireDefault(require("../services/BelvoService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BalancesController {
  async index(request, response) {
    try {
      let {
        linkId,
        date
      } = request.query;
      const belvo = await _BelvoService.default.init(request.params.env);
      const accounts = await belvo.balances.retrieve(linkId, date);
      return response.status(200).json(accounts);
    } catch (error) {
      let status;

      if (error.statusCode) {
        status = error.statusCode;
      } else {
        status = 500;
      }

      return response.status(400).json(error);
    }
  }

}

exports.default = BalancesController;