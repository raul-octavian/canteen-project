<template>
  <section class="container">
    <h1>Food that we serve</h1>
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
        category="food"
      ></elementItem>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import elementItem from "@/components/element.vue";

export default {
  name: "Food",
  components: {
    elementItem: elementItem
  },
  data() {
    return {
      products: [
        {
          name: "Clasic Hamburger",
          type: "Food",
          image: "https://en.wikipedia.org/wiki/Hamburger#/media/File:RedDot_Burger.jpg",
          alt: "hamburger image",
          about:
            "Perfectly cooked beef burger betwen two grilled paties and flesh vegetables",
          ingredients: [
            "ground beef",
            "onions",
            "tomatoes",
            "lettuce",
            "ketchup"
          ],
          alergens: ["gluten"]
        },
       
        {
          name: "Pasta",
          type: "Food",
          image: "@/assets/pasta.jpg",
          alt: "pasta image",
          about: "Extraordinary sweet tomato souce over freshly made pasta",
          ingredients: [
            "tomatoes",
            "garlic",
            "parmegiano",
            "basil",
            "flower",
            "eggs",
            "basil"
          ],
          alergens: ["egs", "gluten"]
        },
        {
          name: "Snitzel",
          type: "Food",
          image: "@/assets/snitzell.jpg",
          alt: "snitzel image",
          about: "Perfectlly deep fried and moist snitzel and french fries",
          ingredients: [
            "chichen breast",
            "breadcrums",
            "parmegiano",
            "potatoes",
            "eggs"
          ],
          alergens: ["egs", "gluten"]
        },
       
      ]
    };
  }
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
