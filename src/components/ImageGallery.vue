<template>
  <div class="image-container">
    <div class="image-and-text" v-for="image in images" :key="image.id">
      <img class="image" :src="image.url" />
      <div class="title image-text">{{ image.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BasicPic } from "src/assets/instapics";
// TODO: typecheck template (image.id)

@Component
export default class ImageGallery extends Vue {
  @Prop() private images!: BasicPic[];
}
</script>

<style lang="less">
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image-and-text {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-align: center;
  overflow-wrap: normal;
}

.image-and-text .image {
  padding: 1px;
  color: #fff;
  width: auto;
  height: 15em;
  // transition: all 300ms ease-out;
  // opacity: 0;
}

.image-and-text:hover .image {
  opacity: 0.4;
}

.image-and-text .image-text {
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
