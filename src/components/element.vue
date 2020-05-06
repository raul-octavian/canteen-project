<template>
  <section>
    <div class="card">
      <div class="card-container">
        <img v-bind:src="image" v-bind:alt="alt" />
        <div class="card-text">
          <h2>{{ name }}</h2>
          <p>{{ about }}</p>
          <p>Ingredients: <ul><li v-for="ingredient in ingredients" v-bind:key="ingredient">{{ ingredient}},</li></ul></p>
          <p v-if="alergens.length > 0" class="alergy-list">Allergens: <ul><li v-for="alergen in alergens" v-bind:key="alergen">{{alergen}}</li></ul></p>
        </div>
      </div>
      <div class="line-card"></div>
    </div>
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

  data() {
      return {
      }
  },
  methods: {

      
  },
  
};
</script>

<style lang="scss">
.card {
  width: 100%;
  padding-right: 40px;
  margin-bottom: 40px;

  .line-card {
    border-bottom: 1px solid rgba($color: $main-color, $alpha: 0.7);
    width: 70%;
    float: right;
    margin-right: 60px;
    margin-top: 0;
  }

  .card-container {
    display: flex;
    padding: 0;

    img {
      max-height: 250px;
      max-width: 250px;
      height: 180px;
      width: 180px;
      flex-grow: 1;
    }
    .card-text {
      flex-grow: 3;
      padding: 0 20px 20px 20px;
      display: flex;
      flex-direction: column;
      position: relative;

      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
        text-align: left;
      }
      .alergy-list {
        margin-bottom: 10px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin-top: 5px;

        li {
          height: 20px;
          margin: 0 10px 10px 0;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .card {
    .card-container {
      display: flex;
      flex-direction: column;
      img {
        height: 150px;
        width: 150px;
        align-self: center;
      }
      .card-text {
        h2 {
          align-self: center;
        }
      }
    }
  }
}
</style>
