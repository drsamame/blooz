<template>
  <section class="section" id="ready-for">
    <div class="container is-centered ready-for">
      <div class="columns is-centered">
        <div class="column is-half">
          <h2 class="title">¿Listo para ser un repartidor Blooz?</h2>
          <p class="text">Trabajamos con más de 100 repartidores que postularon exitosamente</p>
          <nuxt-link to="/registro" class="btn client">Quiero postular</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#ready-for {
  padding-top: 90px;
  background-color: var(--color-primary);
  min-height: 500px;
  display: flex;
  align-items: center;
  @include mobile {
    min-height: 400px;
  }
  .container {
    max-width: 900px;
  }
}
.title {
  color: #fff;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 18px;
  max-width: 340px;
  margin: 0 auto;
  text-align: center;
  @include mobile {
    font-size: 24px;
  }
}
.text {
  font-size: 14px;
  line-height: 20px;
  color: #f8f8fa;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 32px;
  margin-top: 18px;
}
.btn {
  max-width: 150px;
  display: flex;
  margin: 0 auto;
}
</style>
<script>
export default {
  name: "OurClient",
  data() {
    return {
      carousels: [
        {
          business_name: "Nombre de empresa 1",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”",
        },
        {
          business_name: "Nombre de empresa 2",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”",
        },
        {
          business_name: "Nombre de empresa 3",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”",
        },
        {
          business_name: "Nombre de empresa 4",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”",
        },
      ],
    };
  },
};
</script>
