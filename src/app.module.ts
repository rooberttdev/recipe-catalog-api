import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './recipe-catalog-api/infrastructure/auth/jwt-auth.service';
import { JwtStrategy } from './recipe-catalog-api/infrastructure/auth/jwt.strategy';
import { JwtAuthGuard } from './recipe-catalog-api/infrastructure/auth/jwt-auth.guard';
import { AuthController } from './recipe-catalog-api/interfaces/controllers/auth.controller';
import { RecipeController } from './recipe-catalog-api/interfaces/controllers/recipe.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, RecipeController],
  providers: [JwtAuthService, JwtStrategy, JwtAuthGuard],
})
export class AppModule {}
