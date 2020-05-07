<template>
  <section class="container">
    <h1>Deserts that we serve</h1>
    <div class="line"></div>
    <section class="element-container">
      <elementItem
        v-for="product in filterDeserts"
        v-bind:name="product.name"
        v-bind:type="product.type"
        v-bind:image="product.image"
        v-bind:alt="product.alt"
        v-bind:about="product.about"
        v-bind:ingredients="product.ingredients"
        v-bind:alergens="product.alergens"
        v-bind:key="product.name"
      ></elementItem>
    </section>
  </section>
</template>
<script>
// @ is an alias to /src
import elementItem from "@/components/element.vue";
import { mapGetters } from "vuex";

export default {
  name: "Drinks",
  components: {
    elementItem: elementItem
  },
  data() {
    return {};
  },
  computed: mapGetters(["allProducts", "filterDeserts"])
};
</script>

<style lang="scss" scoped>
//The page is stiled in the @/views/food.vue
</style>
