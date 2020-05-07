<template>
  <section class="container">
    <h1>Food that we serve</h1>
    <div class="line"></div>
    <section class="element-container">
      <elementItem
        v-for="product in filterFood"
        v-bind:name="product.name"
        v-bind:type="product.type"
        v-bind:image="product.image"
        v-bind:alt="product.alt"
        v-bind:about="product.about"
        v-bind:ingredients="product.ingredients"
        v-bind:alergens="product.alergens"
        v-bind:key="product.name"
        category="food"
      ></elementItem>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import elementItem from "@/components/element.vue";
import { mapGetters } from "vuex";

export default {
  name: "Food",

  components: {
    elementItem: elementItem
  },
  methods: {},
  data() {
    return {
      food: []
    };
  },
  computed: mapGetters(["allProducts", "filterFood"])
};
</script>

<style lang="scss">
.container {
  width: 100%;
  min-height: 100%;
  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 40px;
  }
  p {
    text-align: center;
  }
  .line {
    border-bottom: 2px solid $main-color;
    width: 70%;
    margin: 20px auto 40px;
  }
  .element-container {
    padding: 20px;
  }
}
</style>
