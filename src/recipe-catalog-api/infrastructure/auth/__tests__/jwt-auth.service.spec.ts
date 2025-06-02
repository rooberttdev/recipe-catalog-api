import { JwtService } from '@nestjs/jwt';
import { JwtAuthService } from '../jwt-auth.service';

describe('JwtAuthService', () => {
  let jwtAuthService: JwtAuthService;
  let mockJwtService: Partial<JwtService>;

  beforeEach(() => {
    mockJwtService = {
      signAsync: jest.fn().mockResolvedValue('fake-token'),
    };

    jwtAuthService = new JwtAuthService(mockJwtService as JwtService);
  });

  describe('validateUser', () => {
    it('Deve retornar o usuário válido se as credenciais forem corretas', async () => {
      const result = await jwtAuthService.validateUser(
        'admin@admin.com',
        'admin',
      );

      expect(result).toEqual({ id: 1, email: 'admin@admin.com' });
    });

    it('Deve retornar null se as credenciais forem inválidas', async () => {
      const result = await jwtAuthService.validateUser(
        'admin@admin.com',
        'errado',
      );

      expect(result).toBeNull();
    });
  });

  describe('generateToken', () => {
    it('Deve gerar um token JWT.', async () => {
      const payload = { sub: 1, email: 'admin@admin.com' };
      const token = await jwtAuthService.generateToken(payload);

      expect(mockJwtService.signAsync).toHaveBeenCalledWith(payload);
      expect(token).toBe('fake-token');
    });
  });
});
