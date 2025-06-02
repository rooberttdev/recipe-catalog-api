import { RecipeRepository } from '../../../domain/repositories/recipe-repository';
import { Recipe } from '../../../domain/entities/recipe.entity';

export class ListAllRecipesUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.findAll();
  }
}
