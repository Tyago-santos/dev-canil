import bcrypt from 'bcrypt';

export default class Hash {
  private SALT_ROUNDS = 10;

  public hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  };

  public comparePassword = async (
    password: string,
    hash: string
  ): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  };
}
