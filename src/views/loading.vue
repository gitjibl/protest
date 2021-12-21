<template>
  <div>
    <button @click="testLod">loading</button>
    <vue-loading
      v-show="loadingShow"
      class="loading"
      type="bars"
      color="#d9544e"
      :size="{ width: '50px', height: '50px' }"
    ></vue-loading>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadingShow: false
    };
  },
  methods: {
    testLod() {
      this.loadingShow = true;
      let that = this;
      setTimeout(function() {
        that.loadingShow = false;
      }, 3000);
    }
  }
};
</script>
<style scoped>
.loading {
  z-index: 99;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
}
</style>