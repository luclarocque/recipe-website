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

export interface BasicPic {
    url: string;
    id: number;
    name: string;
}

export interface InstaPic extends BasicPic {
    tags: FoodTag[];
}