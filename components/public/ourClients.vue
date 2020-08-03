<template>
  <section class="section" id="our-clients">
    <div class="container our-clients is-centered">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <h2 class="title">Nuestros clientes están encantados</h2>
          <p class="text">Más de 100 empresas confían en nosotros</p>
          <nuxt-link to="/postular-negocio" class="btn client">Quiero postular</nuxt-link>
        </div>
        <div class="column is-6">
          <div class="content-carousel">
            <b-carousel :indicator-inside="false" :arrow="false">
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="section">
                  <div class="sign">“</div>
                  <p class="text">{{carousel.text}}</p>
                  <b>{{carousel.business_name}}</b>
                </section>
              </b-carousel-item>
              <template slot="indicators" slot-scope="props"></template>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#our-clients {
  padding-top: 90px;
  background-color: var(--color-primary);
  min-height: 500px;
  display: flex;
  align-items: center;
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
  @include mobile {
    font-size: 24px;
    margin: auto;
    text-align: center;
    line-height: 32px;
  }
}
.text {
  font-size: 14px;
  line-height: 20px;
  color: #f8f8fa;
  margin-bottom: 32px;
  margin-top: 0;
  @include mobile {
    text-align: center;
    margin-top: 10px;
  }
}
.btn {
  max-width: 150px;
  @include mobile {
    margin: 0 auto;
  }
}
.content-carousel {
  max-width: 320px;
  float: right;
  @include mobile {
    float: none;
    margin: 30px auto 0;
  }
  .section {
    .sign {
      font-weight: bold;
      font-size: 40px;
      line-height: 49px;
      color: var(--color-primary);
    }
    .text {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
      color: #2b2b2b;
      margin-bottom: 0;
      margin-top: 0;
      @include mobile {
        text-align: left;
      }
    }
    b {
      display: block;
      margin-top: 18px;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-primary);
    }
  }
}
/deep/ .carousel-items {
  background: #ffffff;
  border-radius: 8px;
}
/deep/ .carousel-indicator {
  margin-top: 20px;
  .indicator-item {
    &.is-active {
      .is-dots {
        background-color: #fff;
        border: none;
        &:hover {
          background-color: #fff;
          border: none;
        }
      }
    }
    .is-dots {
      border: none;
      background: rgba(255, 255, 255, 0.5);
      &:hover {
        border: none;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
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
