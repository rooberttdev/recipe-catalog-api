import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/recipe-catalog-api/domain/services/auth.service';

@Injectable()
export class JwtAuthService implements AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any | null> {
    if (email === 'admin@admin.com' && password === 'admin') {
      return { id: 1, email };
    }
    return null;
  }

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
