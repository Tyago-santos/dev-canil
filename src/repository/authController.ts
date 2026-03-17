
import type { RowDataPacket } from 'mysql2/promise';
import { connection } from '../database/connection.ts';

interface UserRow extends RowDataPacket {
  id: number;
  email: string;
  password: string;
}

export default class AuthRepository {
  public getByEmail = async (email: string) => {
    try {
      const [rows] = await connection.query<UserRow[]>(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

      return rows[0];
    } catch (err) {
      console.error(`erro ao pegar email do usúaruio ${err}`);
    }
  };
}
