import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRecipeUseCase } from 'src/recipe-catalog-api/application/usecases/recipe/create-recipe.usecase';
import { ListAllRecipesUseCase } from 'src/recipe-catalog-api/application/usecases/recipe/list-all-recipes.usecase';
import { JwtAuthGuard } from 'src/recipe-catalog-api/infrastructure/auth/jwt-auth.guard';
import { InMemoryRecipeRepository } from 'src/recipe-catalog-api/infrastructure/repositories/recipe.repository';
import { RecipePresenter } from '../presenters/recipe.presenter';
import { GetRecipeByIdUseCase } from 'src/recipe-catalog-api/application/usecases/recipe/get-recipe-by-id.usecase';
import { CreateRecipeDto } from '../dto/create-recipe.dto';

@ApiTags('Recipes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('recipes')
export class RecipeController {
  private recipeRepository = new InMemoryRecipeRepository();

  @Post()
  @ApiOperation({ summary: 'Criar nova receita' })
  @ApiResponse({ status: 201, description: 'Receita criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async create(@Body() body: CreateRecipeDto) {
    const useCase = new CreateRecipeUseCase(this.recipeRepository);
    const recipe = await useCase.execute(body);
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as receitas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de receitas retornada com sucesso',
  })
  async findAll() {
    const useCase = new ListAllRecipesUseCase(this.recipeRepository);
    const recipes = await useCase.execute();
    return recipes.map(RecipePresenter.toHTTP);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar receita pelo ID' })
  @ApiResponse({ status: 200, description: 'Receita encontrada' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada' })
  async findById(@Param('id') id: string) {
    const useCase = new GetRecipeByIdUseCase(this.recipeRepository);
    const recipe = await useCase.execute(id);
    return RecipePresenter.toHTTP(recipe);
  }
}
