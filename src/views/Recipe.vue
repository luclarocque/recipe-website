<template>
  <div>
    <h1>{{ recipe.name }}</h1>
  </div>
</template>



<script lang="ts">
export default {
  name: "Home",
  components: {
  },
  data: function() {
    return {
      recipe
      // TODO: find different way to pass in FoodTag
    };
  },
  methods: {
    // changeSelection: function(foodtag: FoodTag) {
    //   currentSelection = foodtag;
    //   this.images =
    //     currentSelection !== null ? filterFoods(currentSelection) : pics;
    //   this.buttons.forEach(button => {
    //     button.class =
    //       button.foodtag === foodtag
    //         ? MenuButtonClass.Selected
    //         : MenuButtonClass.Default;
    //   });
    // }
  }
  // computed: {
  //
  // }
};
</script>



<style lang="less">
    
</style>