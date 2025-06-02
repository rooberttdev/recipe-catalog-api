export interface RecipeProps {
  title: string;
  description: string;
  ingredients: string[];
}

export class Recipe {
  public readonly id: string;
  public title: string;
  public description: string;
  public ingredients: string[];
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: RecipeProps, id: string) {
    this.id = id;
    this.title = props.title;
    this.ingredients = props.ingredients;
    this.description = props.description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
