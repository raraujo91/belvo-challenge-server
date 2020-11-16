"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT || 8080;
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.default);
app.get('/', (request, response) => response.json({
  message: 'Welcome to the Belvo API challenge app.'
}));
app.listen(PORT, () => {
  console.log(`Server up and running at ${PORT}!`);
});