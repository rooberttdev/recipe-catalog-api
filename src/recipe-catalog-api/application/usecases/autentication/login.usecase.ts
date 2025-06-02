import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/recipe-catalog-api/domain/services/auth.service';

export class LoginUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(
    email: string,
    password: string,
  ): Promise<{ token: string; email: string }> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = await this.authService.generateToken({
      sub: user.id,
      email: user.email,
    });
    return { token, email: user.email };
  }
}
