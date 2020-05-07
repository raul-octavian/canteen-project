const state = {
  products: [
    {
      name: "Clasic Hamburger",
      type: "Food",
      image: require("@/assets/hamburger.jpg"),
      alt: "hamburger image",
      about:
        "Perfectly cooked beef burger betwen two grilled paties and flesh vegetables",
      ingredients: ["ground beef", "onions", "tomatoes", "lettuce", "ketchup"],
      alergens: ["gluten"]
    },
    {
      name: "Orange Juice",
      type: "Drinks",
      image: require("@/assets/orange-soda.jpg"),
      alt: "orange juice image",
      about: "Freshly squeeed organic orange juice",
      ingredients: ["orage", "pebbermint", "ice"],
      alergens: []
    },
    {
      name: "Strawberry Cake",
      type: "Deserts",
      image: require("@/assets/strawbery-cake.jpg"),
      alt: "cake image",
      about:
        "Sweet and sawer, delicios strawvery and mascarpone cake, on a bed of fresh biscuit",
      ingredients: ["strawbery", "mascarpone", "biscuits", "sugar", "eggs"],
      alergens: ["egs", "gluten", "small-seeded fruit"]
    },
    {
      name: "Brownie",
      type: "Deserts",
      image: require("@/assets/brownie.jpg"),
      alt: "brownie image",
      about: "Sweet, delicios chocolate filled brownie",
      ingredients: ["chocolate", "cream", "flower", "sugar", "eggs"],
      alergens: ["egs", "gluten"]
    },
    {
      name: "Chessecake",
      type: "Deserts",
      image: require("@/assets/chessecake.jpg"),
      alt: "cheesecake image",
      about: "Sweet, delicios and creamy chessecake",
      ingredients: ["mascarpone chese", "cream", "flower", "sugar", "eggs"],
      alergens: ["egs", "gluten"]
    },
    {
      name: "Pasta",
      type: "Food",
      image: require("@/assets/pasta.jpg"),
      alt: "pasta image",
      about: "Extraordinary sweet tomato souce over freshly made pasta",
      ingredients: [
        "tomatoes",
        "garlic",
        "parmegiano",
        "basil",
        "flower",
        "eggs"
      ],
      alergens: ["egs", "gluten"]
    },
    {
      name: "Snitzel",
      type: "Food",
      image: require("@/assets/snitzell.jpg"),
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
      image: require("@/assets/limonade.jpg"),
      alt: "limonade glass image",
      about:
        "Sweet, sawer and refreshing lemonade with strawebery and mint and ice ",
      ingredients: ["lemon", "strawberry", "mint", "sugar", "ice"],
      alergens: ["small seeded fruits"]
    },
    {
      name: "Apple Juice",
      type: "Drinks",
      image: require("@/assets/apple-juice.jpg"),
      alt: "apple juice glass image",
      about: "Sweet, refreshing apple juice  ",
      ingredients: ["apple"],
      alergens: []
    }
  ],
  food: []
};

const getters = {
  allProducts: state => state.products,
  filterFood() {
    return state.products.filter(product => product.type === "Food");
  },
  filterDrinks() {
    return state.products.filter(product => product.type === "Drinks");
  },
  filterDeserts() {
    return state.products.filter(product => product.type === "Deserts");
  }
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
