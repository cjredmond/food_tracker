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
exports.Database = void 0;
class Database {
    static getInstance(db_name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof db_name === 'undefined') {
                db_name = 'food_tracking';
            }
            if (typeof this.instance[db_name] === 'undefined') {
                console.log("START CONNECTION[" + db_name + "]");
                this.instance[db_name] = yield this.connect(db_name);
            }
            return this.instance[db_name];
        });
    }
    static connect(db_name) {
        return __awaiter(this, void 0, void 0, function* () {
            require('dotenv').config();
            const mysql = require('mysql2/promise');
            const bluebird = require('bluebird');
            console.log(process.env.DB_HOST);
            const config = {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: db_name,
                Promise: bluebird
            };
            return yield mysql.createPool(config);
        });
    }
    static getFrontendURL() {
        return 'http://localhost:3000';
    }
}
exports.Database = Database;
Database.instance = [];
//# sourceMappingURL=Database.js.map