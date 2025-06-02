import { RecipeRepository } from '../../../domain/repositories/recipe-repository';
import { NotFoundException } from '@nestjs/common';
import { Recipe } from '../../../domain/entities/recipe.entity';

export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findById(id);

    if (!recipe) {
      throw new NotFoundException('Receita não encontrada');
    }

    return recipe;
  }
}
