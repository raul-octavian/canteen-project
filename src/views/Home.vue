<template>
  <section>
    <div id="hero">
      <h1>Erhvervsakademi Sydvest Canteen</h1>
      <p>We feed the leaders of the future</p>
    </div>
    <section id="hero-promo-section">
      <promo
        v-for="product in allProducts"
        v-bind:name="product.name"
        v-bind:type="product.type"
        v-bind:image="product.image"
        v-bind:alt="product.alt"
        v-bind:about="product.about"
        v-bind:ingredients="product.ingredients"
        v-bind:alergens="product.alergens"
        v-bind:key="product.name"
      ></promo>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import promo from "../components/promoElement.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    promo: promo
  },
  data() {
    return {};
  },
  computed: mapGetters(["allProducts"])
};
</script>

<style lang="scss">
#hero {
  width: 100%;
  background: url("../assets/image-canteen.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
  color: $secondary-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($main-color, $alpha: 0.7);
  }
  h1,
  p {
    color: $secondary-color;
    position: relative;
    z-index: 5;
    text-align: center;
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 200;
    margin-bottom: 20px;
  }

  p {
    font-style: italic;
  }
}
#hero-promo-section {
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 720px) {
  #hero {
    h1 {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 400px) {
  #hero {
    h1 {
      font-size: 1.2rem;
    }
  }
  #hero-promo-section {
    padding: 0;
    width: 100%;
  }
}
</style>
