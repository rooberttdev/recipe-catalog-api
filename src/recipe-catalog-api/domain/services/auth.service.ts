export interface AuthService {
  validateUser(email: string, password: string): Promise<any | null>;
  generateToken(payload: any): Promise<string>;
}
