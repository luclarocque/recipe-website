<template>
  <div class="container">
    <div class="image-container">
      <router-link :to="{ name: 'Recipe', params: {id: image.id} }" class="image-and-text" v-for="image in images" :key="image.id">
        <img class="image" :src="image.url" />
        <div class="title image-text">{{ image.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BasicPic } from "src/types";
// TODO: typecheck template (image.id)

@Component
export default class ImageGallery extends Vue {
  @Prop() private images!: BasicPic[];
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
}

.image-and-text {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-align: center;
  overflow-wrap: normal;
}

.image-and-text:hover .image {
  opacity: 0.4;
}

.image {
  padding: 1px;
  color: #fff;
  width: auto;
  height: 15em;
}

.image-text {
  font-size: 1.3em;
  color: rgb(32, 32, 32);
  -webkit-text-stroke: 1px;
  text-transform: uppercase;
  transition-delay: 0.1s;
  transition-duration: 0.15s;

  width: 80%;
  text-align: center;
  font-size: 1.3em;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 1000%);
}

.image-and-text:hover .title,
.image-and-text:focus .title {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
