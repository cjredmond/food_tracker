import { Database } from './Database';
// import * as bcrypt from 'bcrypt';

export class Auth {
    public static async login(email: string, password: string) {
        const db = await Database.getInstance();
        const [rows, fields] = await db.execute('SELECT auth_id, email FROM auth WHERE email = ? AND password = ?', [email, password]);
        if (rows.length > 0) {
            return {
                success: true,
                auth_row: rows[0]
            }
        }
        return { success: false }
    }

    // public static async getHash(password: string) {
    //     return await bcrypt.hash(password, 10);
    // }

    // public static async checkPass(password: string, hash_password: string) {
    //     return await bcrypt.compare(password, hash_password);
    // }
}