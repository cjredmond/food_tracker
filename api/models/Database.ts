export class Database {
    public static instance: any = [];

    public static async getInstance(db_name?: string) {
        if (typeof db_name === 'undefined') {
            db_name = 'food_tracking';
        }
        if (typeof this.instance[db_name] === 'undefined') {
            console.log("START CONNECTION[" + db_name + "]");
            this.instance[db_name] = await this.connect(db_name);
        }

        return this.instance[db_name];
    }

    public static async connect(db_name: string) {
        require('dotenv').config();
        const mysql = require('mysql2/promise');
        const bluebird = require('bluebird');

        console.log(process.env.DB_HOST)

        const config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: db_name,
            Promise: bluebird
        }

        return await mysql.createPool(config);
    }

    public static getFrontendURL() {
        return 'http://localhost:3000';
    }
}