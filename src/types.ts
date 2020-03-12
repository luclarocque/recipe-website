export interface MenuButton {
  name: string;
  foodtag: FoodTag;
  class: MenuButtonClass;
}

export enum MenuButtonClass {
  Default = "meal-button",
  Selected = "meal-button-selected"
}

export enum FoodTag {
  Breakfast,
  Lunch,
  Dinner,
  Snack,
  Dessert
}

interface Ingredient {
  name: string;
  quantity: number;
  measurement: string;
}

export interface BasicPic {
  url: string;
  name: string;
}

export interface Recipe {
  images: string[];
  id: number;
  name: string;
  tags: FoodTag[];
  ingredients: Ingredient[];
}
