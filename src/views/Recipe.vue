<template>
  <div>
    <h1>{{ recipe.name }}</h1>
    <div class="recipe-container">
      <img class="recipe-image" :src=recipe.images[0] />
    </div>
  </div>
</template>

<script lang="ts">
import recipes from "../assets/recipes";
import { Recipe } from '../types';

export default {
  name: "Home",
  components: {},
  // data: function() {
  //   return {
  //     recipe,  
  //   };
  // },
  // methods: {
  // },
  computed: {
    recipe() {
      return recipes.filter(rec => rec.id === this.$route.params.id)[0]
    }
  }
};
</script>

<style lang="less">
.recipe-container {
  display: flex;
}

.recipe-image {
  width: 100%;
}
</style>
