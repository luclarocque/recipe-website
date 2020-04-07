<template>
  <div>
    <h1>{{ recipe.name }}</h1>
    <img class="recipe-image" :src="recipe.images[0]" />
    <div class="ingredients-and-instructions">
      <div class="block">
        <h2 class="title-text">Ingredients</h2>
        <table class="ingr-table">
          <tr v-for="ingr in recipe.ingredients" :key="ingr.name">
            <td class="ingr-col1">{{ ingr.name }}</td>
            <td class="ingr-col2">
              {{ ingr.quantity }} {{ ingr.measurement }}
            </td>
          </tr>
        </table>
      </div>
      <div class="block">
        <h2 class="title-text">Instructions</h2>
        <ol class="instruc-list">
          <li
            style="margin: 12px;"
            v-for="(line, index) in recipe.directions"
            :key="index"
          >
            {{ line }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import recipes from "../assets/recipes";
import { Recipe } from "../types";

export default {
  name: "Recipe",
  // TODO: create slideshow component instead of basic image
  components: {},
  computed: {
    recipe(): Recipe {
      return recipes.filter(rec => rec.id === this.$route.params.id)[0]; // id passed in from router index.ts
    }
  }
};
</script>

<style scoped lang="less">
.recipe-image {
  max-width: 100%;
}

.ingredients-and-instructions {
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  justify-content: center;
}

.title-text {
  font-size: 20px;
  text-align: center;
}

.ingredients-and-instructions .block {
  max-width: 95%;
  min-width: 280px;
  margin: 10px;
  padding: 10px;
  text-align: left;
  border: 2px solid #2c3e50;
  border-radius: 15px;
  font-size: 14px;
  display: grid;
  justify-content: center;
}

.ingr-table {
  min-width: 160px;
  padding: 10px;
  table-layout: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
tr {
  border: 1px solid rgb(49, 49, 49);
  border: 1px solid rgba(49, 49, 49, 0.15);
  border-width: 1px 0;
}
tr:first-child {
  border-top: none;
}
tr:last-child {
  border-bottom: none;
}
.ingr-col1 {
  width: 120px;
  padding: 3px;
}
.ingr-col2 {
  width: auto;
  padding: 3px;
}

.instruc-list {
  padding: 0px 0px 0px 6px;
  margin: 0px;
}
</style>
