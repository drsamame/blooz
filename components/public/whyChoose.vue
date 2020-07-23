<template>
  <section class="section" id="why-choose">
    <div class="container is-centered why-choose">
      <div class="columns">
        <div class="column is-12">
          <h2 class="title">¿Porqué elegir Blooz?</h2>
        </div>
      </div>
      <div class="columns lists is-centered">
        <div class="column is-4">
          <div class="content">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Programa tus despachos sin complicaciones</h4>
            <p>Escoge tu pickup y drop location y selecciona el vehículo a utilizar. Nosotros nos encargamos del resto</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Trackeo en tiempo real</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue erat sollicitudin lorem consectetur</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Servicio seguro y de confianza</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue erat sollicitudin lorem consectetur</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#why-choose {
  padding-top: 90px;
  background-color: #f8f8fa;
  min-height: 670px;
  display: flex;
  align-items: center;
  .container {
    max-width: 980px;
  }
}
.title {
  font-size: 32px;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  @include mobile {
    font-size: 24px;
  }
}
.lists {
  .subtitle {
    font-weight: bold;
    margin-top: 36px;
    margin-bottom: 18px;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-primary);
    @include mobile {
      margin-top: 25px;
      margin-bottom: 12px;
    }
  }
  .content {
    max-width: 220px;
    margin: 0 auto;
    @include mobile {
      text-align: center;
      margin-bottom: 70px;
    }
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #2b2b2b;
  }
}
</style>
<script>
export default {
  name: "whyChoose",
};
</script>
