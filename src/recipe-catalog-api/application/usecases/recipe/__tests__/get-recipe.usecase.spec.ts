import { GetRecipeByIdUseCase } from '../get-recipe-by-id.usecase';
import { InMemoryRecipeRepository } from 'src/recipe-catalog-api/infrastructure/repositories/recipe.repository';
import { Recipe } from 'src/recipe-catalog-api/domain/entities/recipe.entity';

describe('GetRecipeByIdUseCase', () => {
  it('Deve retornar a receita pelo ID', async () => {
    const repository = new InMemoryRecipeRepository();

    const recipe = new Recipe(
      {
        title: 'Torta de limão',
        description: 'Torta refrescante com cobertura de limão',
        ingredients: ['limão', 'leite condensado', 'biscoito'],
      },
      '1',
    );

    await repository.create(recipe);

    const useCase = new GetRecipeByIdUseCase(repository);
    const result = await useCase.execute(recipe.id);

    expect(result).toEqual(recipe);
  });

  it('Deve lançar erro se a receita não for encontrada', async () => {
    const repository = new InMemoryRecipeRepository();
    const useCase = new GetRecipeByIdUseCase(repository);

    await expect(useCase.execute('id-inexistente')).rejects.toThrowError(
      'Receita não encontrada',
    );
  });
});
