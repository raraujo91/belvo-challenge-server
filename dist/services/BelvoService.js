"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _belvo = _interopRequireDefault(require("belvo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const belvoService = {
  init: async env => {
    try {
      let belvo = new _belvo.default(process.env.BELVO_SECRET_ID, process.env.BELVO_SECRET_KEY, `https://${env}.belvo.co`);
      await belvo.connect();
      return belvo;
    } catch (error) {
      return error;
    }
  }
};
var _default = belvoService;
exports.default = _default;