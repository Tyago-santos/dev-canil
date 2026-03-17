import type { RowDataPacket } from 'mysql2/promise';
import { connection } from '../database/connection.ts';

interface UserRow extends RowDataPacket {
  name: string;
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

  public createUser = async (name: string, email: string, password: string) => {
    try {
      const [rows] = await connection.query<UserRow[]>(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
      );

      return rows[0];
    } catch (err) {
      console.error(`erro ao criar usúario ${err}`);
    }
  };
}
