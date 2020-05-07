<template>
  <div id="side-navigation">
    <router-link to="/Food" class="internal-link-nav">
      <div class="link-container">
        <img class="image-link" src="../assets/1x/plate.png" alt />
      </div>
    </router-link>
    <router-link to="/Drinks" class="internal-link-nav">
      <div class="link-container">
        <img class="image-link" src="../assets/1x/drink.png" alt />
      </div>
    </router-link>
    <router-link to="/Deserts" class="internal-link-nav">
      <div class="link-container">
        <img class="image-link" src="../assets/1x/cake.png" alt />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "iternalLink",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
.internal-link-nav {
  width: 80px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: inset 0px 2px 2px rgba($color: #000000, $alpha: 0.3),
      inset 0px -2px 2px rgba($color: #000000, $alpha: 0.3);
  }

  .link-container {
    width: 60px;

    .image-link {
      width: 100%;
    }
  }
}

@media screen and (max-width: 720px) {
  .internal-link-nav {
    width: 60px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    .link-container {
      width: 40px;

      .image-link {
        width: 100%;
      }
    }
  }
}

@media screen and(max-height: 500px) {
  .internal-link-nav {
    .link-container {
      width: 40px;

      .image-link {
        width: 100%;
      }
    }
  }
}
</style>
