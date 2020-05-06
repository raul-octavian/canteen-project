<template>
  <section class="promo-card">
    <img v-bind:src="image" v-bind:alt="alt" />
    <ul>
      <li>{{ name }}</li>
      <li>{{ about }}</li>
    </ul>
  </section>
</template>

<script>
export default {

  props: {
    name: String,
    type: String,
    image: String,
    alt: String,
    about: String,
    ingredients: Array,
    alergens: Array,
    category: String
   
  },
};
</script>

<style lang="scss">
.promo-card {
  width: 250px;
  padding: 20px;
  margin: 20px;
  border-bottom: 1px solid $main-color;

  img {
    width: 100%;
  }
  ul {
    list-style: none;

    li {
      margin-top: 10px;
      &:first-child {
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .promo-card {
    width: 200px;
    padding: 10px;
    margin: 0;
  }
}
@media screen and (max-width: 400px) {
  .promo-card {
    width: 180px;
    padding: 5px;
    margin: 0;
  }
}
</style>
