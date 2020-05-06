<template>
  <section class="container">
    <h1>All our meals, drinks and deserts</h1>
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
  props: {
    products: Object
  },

  data() {
    return {
      productsTotal: [
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
          name: "Orange Juice",
          type: "Drinks",
          image: "@/assets/orange-soda.jpg",
          alt: "orange juice image",
          about: "Freshly squeeed organic orange juice",
          ingredients: ["orage", "pebbermint", "ice"],
          alergens: []
        },
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
