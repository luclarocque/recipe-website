<template>
  <div class="about">
    <h1>Recipeebs</h1>
    <div class='meal-button-container'>
      <button class="meal-button">Breakfast</button>
      <button class="meal-button">Lunch</button>
      <button class="meal-button">Dinner</button>
      <button class="meal-button">Snacks</button>
    </div>
    <div class='image-container'>
      <img v-for="image in images" :src="image.url" :key="image.id"/>
    </div>
  </div>
</template>


<script>
import instapics from '../assets/instapics.json'
export default {
  data: function () {
    return {
      images: instapics.pics
    }
  }
}

</script>

<style lang="less">
.image-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.meal-button-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.meal-button {
  margin: 8px;
  padding: 8px;
  border: 0px;
  flex: 1;
}

#app {
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