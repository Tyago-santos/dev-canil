import 'express-session';

interface UserRow {
  name: string;
  id?: number;
  email: string;
}

declare module 'express-session' {
  interface SessionData {
    user?: UserRow;
  }
}
