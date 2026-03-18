import mysql from 'mysql2/promise';

const dbUrl =
  process.env.DATABASE_URL || 'mysql://root:1234@127.0.0.1:3306/pest';

export const connection = mysql.createPool(dbUrl);
