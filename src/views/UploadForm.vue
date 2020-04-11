<template>
  <div>
    <h1>Create Your Recipe</h1>
    <div>
      <p>Upload an image</p>
      <input type="file" @change="previewImage" accept="image" />
    </div>
    <div>
      <p>
        Progress: {{ uploadPercent.toFixed() + "%" }}
        <progress id="progress" :value="uploadPercent" max="100"></progress>
      </p>
    </div>
    <div v-if="imageData != null">
      <img class="preview" :src="picUrl" />
      <br />
      <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from "firebase";

export default {
  name: "Create",
  data() {
    return {
      imageData: null,
      picUrl: "",
      uploadPercent: 0,
      recipe: {} //TODO: create recipe object from user input and store in database
    };
  },
  methods: {
    previewImage(event) {
      this.uploadPercent = 0;
      this.picUrl = "";
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picUrl = "";
      const storageRef = firebase
        .storage()
        .ref(`images/${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadPercent =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          // console.log(error.message);
        },
        () => {
          this.uploadPercent = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picUrl = url;
          });
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img.preview {
  width: 200px;
}
</style>
