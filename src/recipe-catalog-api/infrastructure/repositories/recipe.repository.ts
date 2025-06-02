import {
  Recipe,
  RecipeProps,
} from 'src/recipe-catalog-api/domain/entities/recipe.entity';
import { RecipeRepository } from 'src/recipe-catalog-api/domain/repositories/recipe-repository';

export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = [];
  private currentId = 1;

  async create(recipeData: RecipeProps): Promise<Recipe> {
    const recipe = new Recipe(recipeData, this.currentId.toString());
    this.recipes.push(recipe);
    this.currentId++;
    return recipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find((recipe) => recipe.id === id) || null;
  }
}
