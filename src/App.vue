<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }">
      <button class="home-title">Recipeebs</button>
    </router-link>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/home">Home</router-link>
    </div> -->
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home-title {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  &:focus {
    outline: 1px solid #fff; // invisible outline
  }
}
</style>
