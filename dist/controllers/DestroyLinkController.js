"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BelvoService = _interopRequireDefault(require("../services/BelvoService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DestroyLinkController {
  async index(request, response) {
    try {
      const {
        linkId
      } = request.query;
      const belvo = await _BelvoService.default.init(request.params.env);
      const destroy = await belvo.links.delete(linkId);
      return response.status(204).json(destroy);
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

exports.default = DestroyLinkController;