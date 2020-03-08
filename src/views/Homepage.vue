<template>
  <div class="homepage-container">
    <h1>Recipeebs</h1>
    <div class="meal-button-container">
      <button class="meal-button" @click="changeSelection(FoodTag.Breakfast)">
        Breakfast
      </button>
      |
      <button class="meal-button" @click="changeSelection(FoodTag.Lunch)">
        Lunch
      </button>
      |
      <button class="meal-button" @click="changeSelection(FoodTag.Dinner)">
        Dinner
      </button>
      |
      <button class="meal-button" @click="changeSelection(FoodTag.Snack)">
        Snacks
      </button>
    </div>
    <ImageGallery :images="images" />
  </div>
</template>

<script lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";
// pics
import pics, { FoodTag } from "../assets/instapics";

function filterFoods(foodtag: FoodTag) {
  return pics.filter(pic => {
    return pic.tags.includes(foodtag);
  });
}

let currentSelection: FoodTag | null = null;

export default {
  name: "Home",
  components: {
    ImageGallery
  },
  data: function() {
    return {
      images: pics,
      FoodTag // equiv to FoodTag: FoodTag
      // TODO: find different way to pass in FoodTag
    };
  },
  methods: {
    changeSelection: function changeSelection(foodtag: FoodTag) {
      currentSelection = foodtag;
      this.images =
        currentSelection !== null ? filterFoods(currentSelection) : pics;
      // console.log({ currentSelection});
    }
  }
  // computed: {
  //
  // }
};
</script>

<style lang="less">
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

button:hover,
button:focus {
  font-weight: 900;
}

button:focus {
  outline: 1px solid #fff; // invisible outline
}

button:active {
  transform: scale(1.08);
}

.meal-button-container {
  min-width: 30em;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  // grid-template-rows: [1] 5em [2] 5em [3] 5em [4] 5em [5] 5em [6] 5em [7] 5em [8];
  // grid-template-rows: [line1] 60px [line2];
}

.meal-button {
  width: 7em;
}

#app {
  // # for id
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
