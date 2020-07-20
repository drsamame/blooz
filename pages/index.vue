<template>
  <div class="home">
    <section class="section" id="banner">
      <div class="container banner">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="columns">
              <div class="column is-6">
                <article class="card">
                  <img src="~assets/images/logo-empresa.svg" alt />
                  <h3 class="title">Conviértete en repartidor Blooz</h3>
                  <p
                    class="text"
                  >Blooz continua su crecimiento y está buscando aumentar su red de repartidores.</p>
                  <b-button rounded is-orange is-primary>Quiero postular</b-button>
                </article>
              </div>
              <div class="column is-6">
                <div class="content-image">
                  <img src="https://via.placeholder.com/378" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="how-works">
      <div class="container how-works">
        <div class="columns">
          <div class="column is-12">
            <h2 class="title">¿Cómo funciona?</h2>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <div class="content">
              <img v-show="currentId === 1" src="https://via.placeholder.com/200" alt />
              <img v-show="currentId === 2" src="https://via.placeholder.com/202" alt />
              <img v-show="currentId === 3" src="https://via.placeholder.com/203" alt />
            </div>
          </div>
          <div class="column is-6">
            <div class="numbers">
              <div class="number" @click="showContent(1)">1</div>
              <div class="number" @click="showContent(2)">2</div>
              <div class="number" @click="showContent(3)">3</div>
            </div>
            <div class="content-text" v-show="currentId === 1">
              <h4 class="subtitle">Reserva tú vehículo en segundos</h4>
              <p
                class="text"
              >Escoge tu pickup y drop location y selecciona el vehículo a utilizar. Nosotros nos encargamos del resto</p>
            </div>
            <div class="content-text" v-show="currentId === 2">
              <h4 class="subtitle">sit amet consectetur.</h4>
              <p
                class="text"
              >ut repellendus ad, fugiat quod doloribus possimus excepturi, aspernatu ommodi!</p>
            </div>
            <div class="content-text" v-show="currentId === 3">
              <h4 class="subtitle">amet consectetur adipisicing.</h4>
              <p
                class="text"
              >adipisicing elit. Veritatis adipisci rem ullam quo! r sequi commodi! Id, totam c</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="why-choose">
      <div class="container is-centered why-choose">
        <div class="columns">
          <div class="column is-12">
            <h2 class="title">¿Porqué ser parte de Blooz?</h2>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Programa tus despachos sin complicaciones</h4>
            <p>Escoge tu pickup y drop location y selecciona el vehículo a utilizar. Nosotros nos encargamos del resto</p>
          </div>
          <div class="column is-4">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Trackeo en tiempo real</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue erat sollicitudin lorem consectetur</p>
          </div>
          <div class="column is-4">
            <img src="https://via.placeholder.com/90" alt />
            <h4 class="subtitle">Servicio seguro y de confianza</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue erat sollicitudin lorem consectetur</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="our-clients">
      <div class="container our-clients is-centered">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h2 class="title">Nuestros clientes están encantados</h2>
            <p>Más de 100 empresas confían en nosotros</p>
            <b-button class="button is-rounded btn-business">Quiero postular</b-button>
            
          </div>
          <div class="column is-6">
            <b-carousel :indicator-inside="false" :arrow="false">
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="section">
                  <div class="sign">“</div>
                  <p class="title">{{carousel.text}}</p>
                  <b>{{carousel.business_name}}</b>
                </section>
              </b-carousel-item>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="ready-for">
      <div class="container is-centered ready-for">
        <div class="columns is-centered">
          <div class="column is-half ">
            <h2 class="title">¿Listo para ser un repartidor Blooz?</h2>
            <p>Trabajamos con más de 100 repartidores que postularon exitosamente</p>
            <b-button rounded is-orange class="btn_business">Quiero postular</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  components: {},
  data() {
    return {
      currentId: 1,
      carousels: [
        {
          business_name: "Nombre de empresa 1",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”"
        },
        {
          business_name: "Nombre de empresa 2",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”"
        },
        {
          business_name: "Nombre de empresa 3",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”"
        },
        {
          business_name: "Nombre de empresa 4",
          text:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam congue  erat sollicitudin lorem consectetur”"
        }
      ]
    };
  },
  methods: {
    showContent(id) {
      this.currentId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
