import 'express-session';

interface UserRow {
  id: number;
  email: string;
  password: string;
}

declare module 'express-session' {
  interface SessionData {
    user?: UserRow;
  }
}
