<template>
  <section class="container">
    <h1>Drinks that we serve</h1>
    <div class="line"></div>
    <section class="element-container">
      <elementItem
        v-for="product in products"
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

export default {
  name: "Drinks",
  components: {
    elementItem: elementItem
  },
  data() {
    return {
      products: [
   
        {
          name: "Orange Juice",
          type: "Drinks",
          image: "@/assets/orange-soda.jpg",
          alt: "orange juice image",
          about: "Freshly squeeed organic orange juice",
          ingredients: ["orage", "pebbermint", "ice"],
          alergens: []
        },
        {
          name: "Limonade",
          type: "Drinks",
          image: "@/assets/limonade.jpg",
          alt: "limonade glass image",
          about:
            "Sweet, sawer and refreshing lemonade with strawebery and mint and ice ",
          ingredients: ["lemon", "strawberry", "mint", "sugar", "ice"],
          alergens: ["small seeded fruits"]
        },
        {
          name: "Apple Juice",
          type: "Drinks",
          image: "@/assets/apple-juice.jpg",
          alt: "apple juice glass image",
          about: "Sweet, refreshing apple juice  ",
          ingredients: ["apple"],
          alergens: []
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//The page is stiled in the @/views/food.vue
</style>
