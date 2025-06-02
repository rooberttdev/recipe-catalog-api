import { InMemoryRecipeRepository } from 'src/recipe-catalog-api/infrastructure/repositories/recipe.repository';
import { CreateRecipeUseCase } from '../create-recipe.usecase';

describe('CreateRecipeUseCase', () => {
  let createRecipeUseCase: CreateRecipeUseCase;
  let recipeRepository: InMemoryRecipeRepository;

  beforeEach(() => {
    recipeRepository = new InMemoryRecipeRepository();
    createRecipeUseCase = new CreateRecipeUseCase(recipeRepository);
  });

  it('deve criar uma nova receita com sucesso', async () => {
    const data = {
      title: 'Bolo de cenoura',
      description: 'Receita tradicional com cobertura de chocolate',
      ingredients: ['cenoura', 'açúcar', 'farinha'],
    };

    const recipe = await createRecipeUseCase.execute(data);

    expect(recipe).toHaveProperty('id');
    expect(recipe.title).toBe(data.title);
    expect(recipe.description).toBe(data.description);
    expect(recipe.ingredients).toEqual(data.ingredients);
    expect(recipe.createdAt).toBeInstanceOf(Date);
    expect(recipe.updatedAt).toBeInstanceOf(Date);
  });
});
