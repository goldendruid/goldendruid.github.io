export interface Recipe {
  name: string;
  description: string;
  formula : Ratio[];
}
export interface Ratio {
  type: string;
  ratio: string;
}
