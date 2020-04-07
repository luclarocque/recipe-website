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
    ],
    directions: [
      "Shuck oysters using coasters to hoist the moist oyster cluster ",
      "Bop",
      "Bop again"
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
        name: "tomatoes",
        quantity: 5,
        measurement: ""
      },
      {
        name: "really long peppers with pepper sauce",
        quantity: 12345,
        measurement: "kilograms"
      },
      {
        name: "pepper",
        quantity: "1/2",
        measurement: "tsp"
      }
    ],
    directions: ["Pepper tomatoes"]
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
    ],
    directions: ["Shuck oysters", "Bop"]
  },
  {
    name: "Homemade Brioche",
    images: ["https://i.imgur.com/aS4TbEt.jpg"],
    id: "3",
    tags: [FoodTag.Breakfast, FoodTag.Snack],
    ingredients: [
      {
        name: "Flour",
        quantity: 3,
        measurement: "cups"
      },
      {
        name: "Water",
        quantity: 125,
        measurement: "mL"
      },
      {
        name: "Baker's Yeast",
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Butter",
        quantity: "1/4",
        measurement: "cup"
      },
      {
        name: "Salt",
        quantity: "1/2",
        measurement: "tsp"
      }
    ],
    directions: [
      "Preheat the oven to 350F",
      "Place the yeast into a large mixing bowl and then pour in the flour. It's very important to put the yeast in first to prevent it from touching the salt.",
      "Add the salt on top of the flour",
      "Add the water and melted butter and mix",
      "Pour the mixture into a round baking pan",
      "Bake for 35-40 minutes or until the brioche is a nice golden brown colour"
    ]
  },
  {
    name: "Proja",
    images: [
      "https://recepti.odados.com/images/cache/6450d7e0c56fc755e0a063844aecc216_w670_h436_cp.jpg"
    ],
    id: "4",
    tags: [FoodTag.Breakfast, FoodTag.Lunch, FoodTag.Snack],
    ingredients: [
      {
        name: "Flour",
        quantity: 1,
        measurement: "cup"
      },
      {
        name: "Corn Meal",
        quantity: 1,
        measurement: "cup"
      },
      {
        name: "Baking Powder",
        quantity: "1/2",
        measurement: "tsp"
      },
      {
        name: "Salt",
        quantity: "1/2",
        measurement: "tsp"
      },
      {
        name: "Eggs",
        quantity: "2",
        measurement: ""
      },
      {
        name: "Milk",
        quantity: 1,
        measurement: "cup"
      },
      {
        name: "Water",
        quantity: 1,
        measurement: "cup"
      },
      {
        name: "Extra Virgin Olive Oil",
        quantity: "1/2",
        measurement: "cup"
      },
      {
        name: "Cheese",
        quantity: "3/4",
        measurement: "cup"
      }
    ],
    directions: [
      "Preheat oven to 410F",
      "Place the dry ingredients (flour, corn meal, baking powder, salt) into a large mixing bowl",
      "Mix",
      "Add the eggs and mix",
      "Add the milk and water and mix. Note: add liquids a little bit at a time while mixing to reduce clumping.",
      "Pour in the olive oil and mix in the cheese (cubed)",
      "Line a small rectangular baking pan with parchment paper, and pour the mixture into the pan",
      "Bake for 35-40 minutes or until a nice golden brown colour"
    ]
  }
];

export default recipes; //  by default, when importing from this file, get just pics
