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
  quantity: number | string;
  measurement: string;
}

export interface BasicPic {
  url: string;
  name: string;
  id: string;
}

export interface Recipe {
  images: string[];
  id: string;
  name: string;
  tags: FoodTag[];
  ingredients: Ingredient[];
  directions: string[];
}
