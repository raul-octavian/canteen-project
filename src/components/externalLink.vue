<template>
  <div id="side-navigation" class="right">
    <div class="external-link-nav">
      <a class="external-link-container">
        <img src="../assets/1x/facebook.png" alt />
      </a>
      <a class="external-link-container">
        <img src="../assets/1x/instagram.png" alt />
      </a>

      <a class="external-link-container">
        <img src="../assets/1x/tweeter.png" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.external-link-nav {
  width: 80px;
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}
.external-link-container {
  margin: 3px;
  height: 25px;
  width: 25px;
  img {
    height: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 720px) {
  .external-link-nav {
    width: 60px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
