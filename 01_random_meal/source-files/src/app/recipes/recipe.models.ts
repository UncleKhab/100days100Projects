export interface Ingredient {
  title: string;
  qty: string;
}
export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: any;
  imageUrl: string;
  videoUrl: string;
  source: string;
}
