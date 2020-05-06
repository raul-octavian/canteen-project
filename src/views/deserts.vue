<template>
  <section class="container">
    <h1>Deserts that we serve</h1>
    <div class="line"></div>
    <section class="element-container">
      <elementItem
        v-for="product in productsTotal"
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
          name: "Strawberry Cake",
          type: "Deserts",
          image: "@/assets/strawbery-cake.jpg",
          alt: "cake image",
          about:
            "Sweet and sawer, delicios strawvery and mascarpone cake, on a bed of fresh biscuit",
          ingredients: ["strawbery", "mascarpone", "biscuits", "sugar", "eggs"],
          alergens: ["egs", "gluten", "small-seeded fruit"]
        },
        {
          name: "Brownie",
          type: "Deserts",
          image: "@/assets/brownie.jpg",
          alt: "brownie image",
          about: "Sweet, delicios chocolate filled brownie",
          ingredients: ["chocolate", "cream", "flower", "sugar", "eggs"],
          alergens: ["egs", "gluten"]
        },
        {
          name: "Chessecake",
          type: "Deserts",
          image: "@/assets/chessecake.jpg",
          alt: "cheesecake image",
          about: "Sweet, delicios and creamy chessecake",
          ingredients: ["mascarpone chese", "cream", "flower", "sugar", "eggs"],
          alergens: ["egs", "gluten"]
        },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//The page is stiled in the @/views/food.vue
</style>
