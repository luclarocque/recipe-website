<template>
  <div>
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
import Vue from "vue";
import ImageGallery from "@/components/ImageGallery.vue";
import recipes from "@/assets/recipes";
import {
  FoodTag,
  MenuButton,
  MenuButtonClass,
  Recipe,
  BasicPic
} from "../types";

// TODO: fix spacing between rows
// TODO: make scrollbar invisible to prevent "jolting" when changing selection?

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

function filterFoods(foodtag: FoodTag): Recipe[] {
  return recipes.filter(recipe => {
    return recipe.tags.includes(foodtag);
  });
}

function recipeToBasicPic(recipe: Recipe): BasicPic {
  return {
    url: recipe.images[0],
    name: recipe.name,
    id: recipe.id
  };
}

export default Vue.extend({
  name: "Home",
  components: {
    ImageGallery
  },
  data: function() {
    return {
      FoodTag,
      buttons
      // TODO: find different way to pass in FoodTag
    };
  },
  methods: {
    changeSelection(foodtag: FoodTag) {
      currentSelection = foodtag;
      const filteredRecipes =
        currentSelection === null ? recipes : filterFoods(currentSelection);
      this.basicpics = filteredRecipes.map(recipeToBasicPic);
      this.buttons.forEach(button => {
        button.class =
          button.foodtag === foodtag
            ? MenuButtonClass.Selected
            : MenuButtonClass.Default;
      });
    }
  },
  computed: {
    basicpics: () => recipes.map(recipeToBasicPic)
  }
});
</script>

<style scoped lang="less">
.meal-button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.meal-button {
  // width: 132px;
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
  .meal-button;
  font-weight: 900;
}
</style>
