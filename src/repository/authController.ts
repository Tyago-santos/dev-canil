import { connection } from '../database/connection.ts';

export default class AuthRepository {
  public getByEmail = async (email: string) => {
    try {
      const [rows] = await connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

      return rows
    } catch (err) {
      console.error(`erro ao pegar email do usúaruio ${err}`);
    }
  };
}
