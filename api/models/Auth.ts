import { Database } from './Database';

export class Auth {
    public static async testAuth() {
        const db = await Database.getInstance();
        const [rows, fields] = await db.execute('SELECT * FROM auth');
        return rows;
    }
}