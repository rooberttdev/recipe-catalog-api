import { ListAllRecipesUseCase } from '../list-all-recipes.usecase';
import { InMemoryRecipeRepository } from 'src/recipe-catalog-api/infrastructure/repositories/recipe.repository';
import { Recipe } from 'src/recipe-catalog-api/domain/entities/recipe.entity';

describe('ListAllRecipesUseCase', () => {
  it('deve retornar todas as receitas cadastradas', async () => {
    const repository = new InMemoryRecipeRepository();

    const recipe1 = new Recipe(
      {
        title: 'Bolo de chocolate',
        description: 'Bolo com cobertura de chocolate',
        ingredients: ['chocolate', 'farinha', 'açúcar'],
      },
      '1',
    );

    const recipe2 = new Recipe(
      {
        title: 'Pão de queijo',
        description: 'Tradicional pão de queijo mineiro',
        ingredients: ['polvilho', 'queijo', 'ovo'],
      },
      '2',
    );

    await repository.create(recipe1);
    await repository.create(recipe2);

    const useCase = new ListAllRecipesUseCase(repository);
    const recipes = await useCase.execute();

    expect(recipes).toHaveLength(2);
    expect(recipes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '1',
          title: 'Bolo de chocolate',
          description: 'Bolo com cobertura de chocolate',
          ingredients: ['chocolate', 'farinha', 'açúcar'],
        }),
        expect.objectContaining({
          id: '2',
          title: 'Pão de queijo',
          description: 'Tradicional pão de queijo mineiro',
          ingredients: ['polvilho', 'queijo', 'ovo'],
        }),
      ]),
    );
  });
});
