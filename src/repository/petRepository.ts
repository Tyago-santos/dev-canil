import { connection } from '../database/connection.ts';
import type { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

interface UserRow extends RowDataPacket {
  name: string;
  pet_type: string;
  color: string;
  sex: string;
  photo: string;
  describe: string;
}

export default class PetRepository {
  public getAllPets = async () => {
    try {
      const [rows] = await connection.query<UserRow[]>('SELECT * FROM animal');

      return rows;
    } catch (err) {
      console.error(`erro ao pegar todos os animais ${err}`);
    }
  };

  public createPet = async (
    name: string,
    pet_type: string,
    color: string,
    sex: string,
    photo: string,
    describe: string
  ) => {
    try {

      const [result] = await connection.query<ResultSetHeader>(
        'INSERT INTO animal (name, pet_type, color, sex, photo, `describe`) VALUES (?, ?, ?, ?, ?, ?)',
        [name, pet_type, color, sex, photo, describe]
      );


      return {
        id: result.insertId,
        name,
        pet_type,
        color,
        sex,
        photo,
        describe,
      };
    } catch (err) {
      console.error(`erro ao criar pet ${err}`);
    }
  };
}
