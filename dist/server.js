"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8080;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const moment_1 = __importDefault(require("moment"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: Infinity }));
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false, limit: Infinity }));
app.use(body_parser_1.default.json({ limit: Infinity }));
const api = express_1.default.Router();
api.use((req, res, next) => {
    console.log(moment_1.default().format('YYYY/MM/DD HH:mm:ss'), 'Route: ', req.url);
    next();
});
process.on('uncaughtException', (e) => {
    console.log(moment_1.default().format('YYYY/MM/DD HH:mm:ss'), 'Uncaught Exception: ', e.stack || e);
});
api.get("/", (req, res) => {
    res.send("hello");
});
const controllers_1 = require("./controllers");
api.use('/auth', controllers_1.AuthController);
app.use('/api', api);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map