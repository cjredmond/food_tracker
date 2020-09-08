"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const express_1 = require("express");
const models_1 = require("../models");
function testAuthRoute() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.Auth.testAuth();
    });
}
// -------------- ROUTES ------------- //
const router = express_1.Router();
router.get('/test_auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield testAuthRoute());
}));
exports.AuthController = router;
//# sourceMappingURL=auth.controller.js.map