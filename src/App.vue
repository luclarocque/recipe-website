<template>
  <div id="app">
    <div class="nav-container">
      <router-link :to="{ name: 'Home' }">
        <button class="home-title">Recipeebs</button>
      </router-link>
      <router-link :to="{ name: 'Create' }">
        <button class="create-btn">Create Recipe</button>
      </router-link>
    </div>
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="less">
// global styling

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  display: inline-block;
  border: none;
  margin: 5px;
  // padding: 1em 1.5em;
  // margin: 0.3em;
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

.nav-container {
  display: grid;
}

.home-title {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  // display: inline-block;
  &:focus {
    outline: 1px solid #fff; // invisible outline
  }
}

.create-btn {
  border: 1px solid black;
  border-radius: 9px;
  background-color: rgb(234, 255, 175);
  padding: 7px 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: 0px solid #fff; // invisible outline
  }
}
</style>
