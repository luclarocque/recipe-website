<template>
  <div>
    <h1>Recipeebs</h1>
    <div class="meal-button-container">
      <div v-for="(button, index) in buttons" :key="button.name">
        <button
          v-bind:class="button.class"
          v-on:click="changeSelection(button.foodtag)"
        >
          {{ button.name }}
        </button>
        {{ index !== buttons.length - 1 ? "|" : "" }}
      </div>
    </div>
    <ImageGallery :images="basicpics" />
  </div>
</template>

<script lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";
import recipes from "../assets/recipes";
import {
  FoodTag,
  MenuButton,
  MenuButtonClass,
  Recipe,
  BasicPic
} from "../types";

function filterFoods(foodtag: FoodTag) {
  return recipes.filter(recipe => {
    return recipe.tags.includes(foodtag);
  });
}

// TODO: fix spacing between rows
// TODO: fix jerking when selecting (scrollbar appearing)

let currentSelection: FoodTag | null = null;

const buttons: MenuButton[] = [
  {
    name: "Breakfast",
    foodtag: FoodTag.Breakfast,
    class: MenuButtonClass.Default
  },
  {
    name: "Lunch",
    foodtag: FoodTag.Lunch,
    class: MenuButtonClass.Default
  },
  {
    name: "Dinner",
    foodtag: FoodTag.Dinner,
    class: MenuButtonClass.Default
  },
  {
    name: "Snacks",
    foodtag: FoodTag.Snack,
    class: MenuButtonClass.Default
  }
];

function recipeToBasicPic(recipe: Recipe): BasicPic {
  return {
    url: recipe.images[0],
    name: recipe.name,
    id: recipe.id
  };
}

export default {
  name: "Home",
  components: {
    ImageGallery
  },
  data: function() {
    return {
      basicpics: recipes.map(recipeToBasicPic),
      FoodTag,
      buttons
      // TODO: find different way to pass in FoodTag
    };
  },
  methods: {
    changeSelection: function(foodtag: FoodTag) {
      currentSelection = foodtag;
      const filteredRecipes =
        currentSelection !== null ? filterFoods(currentSelection) : recipes;
      this.basicpics = filteredRecipes.map(recipeToBasicPic);
      this.buttons.forEach(button => {
        button.class =
          button.foodtag === foodtag
            ? MenuButtonClass.Selected
            : MenuButtonClass.Default;
      });
    }
  }
  // computed: {
  //
  // }
};
</script>

<style lang="less">
// body {
//   overflow: hidden;  // uncomment to
// }

button {
  display: inline-block;
  border: none;
  padding: 1em 1.5em;
  margin: 0.3em;
  text-decoration: none;
  background: white;
  // color: #ffffff;
  font-family: sans-serif;
  font-size: 1.1em;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  // -webkit-appearance: none;
  // -moz-appearance: none;
}

.meal-button-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  // grid-template-rows: [1] 5em [2] 5em [3] 5em [4] 5em [5] 5em [6] 5em [7] 5em [8];
  // grid-template-rows: [line1] 60px [line2];
}

.meal-button {
  width: 132px;
  &:hover {
    font-weight: 900;
  }
  &:focus {
    outline: 1px solid #fff; // invisible outline
  }
  &:active {
    transform: scale(1.08);
  }
}

.meal-button-selected {
  font-weight: 900;
  width: 132px;
  &:hover {
    font-weight: 900;
  }
  &:focus {
    outline: 1px solid #fff; // invisible outline
  }
  &:active {
    transform: scale(1.08);
  }
}
</style>
