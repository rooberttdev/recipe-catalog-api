import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginUseCase } from 'src/recipe-catalog-api/application/usecases/autentication/login.usecase';
import { JwtAuthService } from 'src/recipe-catalog-api/infrastructure/auth/jwt-auth.service';
import { JwtAuthGuard } from 'src/recipe-catalog-api/infrastructure/auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/recipe-catalog-api/interfaces/dto/login.dto';
import { ValidateTokenDto } from 'src/recipe-catalog-api/interfaces/dto/validate-token.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso' })
  async login(@Body() body: LoginDto) {
    const loginUseCase = new LoginUseCase(this.jwtAuthService);
    return loginUseCase.execute(body.email, body.password);
  }

  @Post('validate')
  @ApiOperation({ summary: 'Validar token JWT' })
  @ApiResponse({ status: 200, description: 'Token válido' })
  async validateToken(@Body() body: ValidateTokenDto) {
    try {
      const payload = await this.jwtService.verifyAsync(body.token, {
        secret: 'secret',
      });

      return {
        valid: true,
      };
    } catch (error) {
      return {
        valid: false,
        error: 'Token inválido ou expirado',
      };
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: 'Encerrar sessão (logout)' })
  @ApiResponse({ status: 200, description: 'Logout realizado com sucesso' })
  async logout() {
    return {
      message: 'Logout realizado com sucesso.',
    };
  }
}
