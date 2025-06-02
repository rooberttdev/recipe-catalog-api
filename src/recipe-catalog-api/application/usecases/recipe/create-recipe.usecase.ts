import { RecipeRepository } from '../../../domain/repositories/recipe-repository';
import { RecipeProps } from '../../../domain/entities/recipe.entity';
import { BadRequestException } from '@nestjs/common';

export class CreateRecipeUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(input: RecipeProps) {
    if (!input.title || typeof input.title !== 'string') {
      throw new BadRequestException('Título inválido');
    }
    if (!input.title.trim()) {
      throw new BadRequestException('Título não pode ser vazio');
    }

    if (input.title.length > 100) {
      throw new BadRequestException('Título muito longo');
    }

    if (
      !Array.isArray(input.ingredients) ||
      input.ingredients.length === 0 ||
      input.ingredients.some((ing) => typeof ing !== 'string' || !ing.trim())
    ) {
      throw new BadRequestException('Ingredientes inválidos');
    }

    const recipe = await this.recipeRepository.create(input);
    return recipe;
  }
}
