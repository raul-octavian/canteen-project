<template>
  <section id="footer">
    <p>
      Designed by
      <a href="https://www.linkedin.com/in/akosgyetvan/"></a>
      <span>Ákos Gyetván</span>
    </p>
    <p>
      Implemented by
      <a href="www.linkedin.com/in/raul-octavian-albu"></a>
      <span>Raul-Octavian Albu</span>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  height: 80px;
  width: 100%;
  background: $main-color;
  color: $secondary-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    color: $secondary-color;

    a {
      text-decoration: none;
      color: inherit;
    }

    span {
      font-style: italic;
      cursor: pointer;
      color: inherit;
    }
  }
}
</style>
