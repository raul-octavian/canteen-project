<template>
  <section class="container">
    <h1>Erhvervsakademi Sydvest Canteen</h1>
    <p>
      We want to hear form you, so send us your favorit recepies and they might
      end up on our permanent menu
    </p>
    <div class="line"></div>
    <section class="element-container">
      <form action>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Student name..."
        />
        <input type="text" id="id" name="id" placeholder="Student ID nr" />
        <input type="text" id="name" name="name" placeholder="recepie name" />
        <div class="radio-form-section">
          <section>
            <input type="radio" id="food" name="category" value="food" />
            <label for="food">Food</label>
          </section>
          <section>
            <input type="radio" id="drink" name="category" value="drink" />
            <label for="drink">Drink</label>
          </section>
          <section>
            <input type="radio" id="deserts" name="category" value="deserts" />
            <label for="deserts">Deserts</label>
          </section>
        </div>
        <textarea
          name="recepie-text"
          id="recepie-text"
          cols="30"
          rows="10"
          placeholder="enter tour recepie here..."
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div id="hero">
        <p>We feed the leaders of the future</p>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  components: {}
};
</script>

<style lang="scss" scoped>
// clases ouside of the from are stiled in @/views/food.vue

form {
  width: 70%;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;

  input {
    min-width: 60%;
    max-width: 60%;
    margin-bottom: 20px;
    border: 1px solid $main-color;
    padding: 5px 10px;
    outline: none;
    color: $main-color;
  }
  .radio-form-section {
    display: flex;
    margin-bottom: 20px;
    section {
      margin: 0 20px;
      input {
        margin: 10px;
        border: 1px solid $main-color;
      }
      label {
        display: inline-block;
        background-color: $main-color;
        color: $secondary-color;
        border: 1px solid $secondary-color;
        border-radius: 5px;
        padding: 0 5px;
        cursor: pointer;
      }
    }
  }
  textarea {
    min-width: 90%;
    min-height: 25vh;
    margin-bottom: 20px;
    border: 1px solid $main-color;

    padding: 5px 10px;
    outline: none;
    color: $main-color;
  }
}
.container {
  .element-container {
    padding: 0;
  }
}
button {
  background-color: $main-color;
  color: $secondary-color;
  padding: 10px 30px;
  border: 1px solid $secondary-color;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
