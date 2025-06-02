import { Recipe } from '../entities/recipe.entity';
import { RecipeProps } from '../entities/recipe.entity';

export interface RecipeRepository {
  create(recipeData: RecipeProps): Promise<Recipe>;
  findAll(): Promise<Recipe[]>;
  findById(id: string): Promise<Recipe | null>;
}
