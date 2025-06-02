import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'Bolo de cenoura',
    description: 'Título da receita',
  })
  title: string;

  @ApiProperty({
    example:
      'Receita tradicional de bolo de cenoura com cobertura de chocolate',
    description: 'Descrição da receita',
  })
  description: string;

  @ApiProperty({
    example: ['cenoura', 'açúcar', 'farinha', 'ovos', 'óleo'],
    description: 'Lista de ingredientes da receita',
    type: [String],
  })
  ingredients: string[];
}
