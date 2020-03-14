import { Recipe, FoodTag } from "../types";

export const recipes: Recipe[] = [
  {
    name: "long form oyster bop",
    images: [
      "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/c0.42.1032.1032a/s150x150/87307361_124149015819009_3535749928291090537_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Orfgix-eSKAAX_4sPR6&oh=a2f17aeee14dc431cf19572ca96568e9&oe=5E95D9A0"
    ],
    id: "0",
    tags: [FoodTag.Lunch],
    ingredients: [
      {
        name: "oyster",
        quantity: 4,
        measurement: ""
      },
      {
        name: "lime juice",
        quantity: 3,
        measurement: "mL"
      }
    ]
  },
  {
    name: "cherry tomatoes",
    images: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-tomatoes-600x750.jpg"
    ],
    id: "1",
    tags: [FoodTag.Lunch, FoodTag.Breakfast],
    ingredients: [
      {
        name: "oyster",
        quantity: 4,
        measurement: ""
      },
      {
        name: "lime juice",
        quantity: 3,
        measurement: "mL"
      }
    ]
  },
  {
    name: "oyster bop",
    images: [
      "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/c0.42.1032.1032a/s150x150/87307361_124149015819009_3535749928291090537_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Orfgix-eSKAAX_4sPR6&oh=a2f17aeee14dc431cf19572ca96568e9&oe=5E95D9A0"
    ],
    id: "2",
    tags: [FoodTag.Lunch],
    ingredients: [
      {
        name: "oyster",
        quantity: 4,
        measurement: ""
      },
      {
        name: "lime juice",
        quantity: 3,
        measurement: "mL"
      }
    ]
  }
];

export default recipes; //  by default, when importing from this file, get just pics
