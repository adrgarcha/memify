import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = (password: string): Promise<string> => {
   return bcrypt.hash(password, saltRounds);
};

export const comparePassword = (password: string, hash: string): Promise<boolean> => {
   return bcrypt.compare(password, hash);
};
