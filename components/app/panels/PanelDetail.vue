<template>
  <PanelLateral @closePanel="closePanel">
    <template slot="panel-body">
      <div class="detail">
        <section class="header">
          <h2 class="title">
            <img class="isotipe" src="~assets/images/isotipe.svg" alt />
            Nº 0001
          </h2>
          <div class="download">
            <img src="~assets/images/download.svg" alt />
            Rotulado
          </div>
        </section>
        <section class="body">
          <div class="row">
            <div class="client">Cliente: Juan Rodriguez</div>
            <b-icon icon="phone" size="is-small"></b-icon>
          </div>
          <ul class="list">
            <li>
              <div class="direction">
                <img src="https://via.placeholder.com/18x18" alt />Javier Prado 240 Urb. Los…
              </div>
            </li>
            <li>
              <div class="date">
                <img src="https://via.placeholder.com/18x18" alt />Martes 16 de Julio
              </div>
            </li>
            <li>
              <div class="payment">
                <img src="https://via.placeholder.com/18x18" alt />Costo: S/ 120
              </div>
            </li>
            <li>
              <div class="surcharge">
                <img src="https://via.placeholder.com/18x18" alt />Recargo pendiente:
                <span>Sin recargos</span>
              </div>
            </li>
          </ul>
          <div class="order">
            <div class="not-assignet">
              <p>
                Repartidor:
                <span>Por confirmar</span>
              </p>
            </div>
            <div class="driver">
              <div class="left">
                <p>
                  Repartidor:
                  Luis Pérez
                </p>
              </div>
              <div class="right">
                <img class="driver-image" src="https://via.placeholder.com/32x32" alt />
                <b-icon icon="phone" size="is-small"></b-icon>
              </div>
            </div>
          </div>
          <div class="content-map">
            <a :href="mapsUrl" class="overlay"></a>
            <client-only>
              <l-map :zoom="zoom" :center="center" style="height: 140px">
                <l-tile-layer :url="url" :attribution="attribution" />
                <l-marker :lat-lng="marker"></l-marker>
              </l-map>
            </client-only>
          </div>
          <div class="steps">
            <b-steps
              v-model="activeStep"
              vertical
              :has-navigation="false"
              label-position="bottom"
              mobile-mode="minimalist"
            >
              <b-step-item label="step1" step="1" :clickable="false">
                <div class="content-step is-previous">
                  <h3 class="state">Confirmar repartidor</h3>
                  <p class="text">Martes 16 de Julio, 8:00 am</p>
                </div>
              </b-step-item>

              <b-step-item label="step2" step="2" :clickable="false">
                <div class="content-step is-previous">
                  <h3 class="state">Recoger en tienda</h3>
                  <p class="text">Martes 16 de Julio, 9:00 am</p>
                  <p class="text">Av. Alfredo benavides 284, San Isidro</p>

                  <a href="#!" class="marker">
                    <img src="~assets/images/marker.svg" alt />
                    Ver en mapa
                  </a>
                </div>
              </b-step-item>

              <b-step-item label="step3" step="3" :clickable="false">
                <div class="content-step is-previous">
                  <h3 class="state">Delivery en camino</h3>
                  <p class="text">Martes 16 de Julio, 9:10 am</p>
                  <p class="text">Av. Orengo 196, San Isidro</p>
                  <a href="#!" class="marker">
                    <img src="~assets/images/marker.svg" alt />
                    Ver en mapa
                  </a>
                </div>
              </b-step-item>
              <b-step-item label="step4" step="4" :clickable="false">
                <div class="content-step is-previous">
                  <h3 class="state">Entregar pedido</h3>
                  <p class="text">Martes 16 de Julio, 10:00 am</p>
                  <p class="text">Nota: Dejarlo en la puerta del departamento</p>
                </div>
              </b-step-item>
              <b-step-item label="step5" step="5" :clickable="false" :visible="true">
                <div class="content-step active">
                  <h3 class="state">Pagar recargo</h3>
                  <p class="text">Martes 16 de Julio, 10:00 am</p>
                  <p class="text">Nota: Dejarlo en la puerta del departamento</p>
                </div>
              </b-step-item>
            </b-steps>
          </div>
        </section>
      </div>
    </template>
  </PanelLateral>
</template>

<script>
import PanelLateral from "@/components/inputs/panel";
import BInputWithValidation from "@/components/inputs/input";
import BDatepickerWithValidation from "@/components/inputs/datepicker";
import BRadiosWithValidation from "@/components/inputs/radio";
import BCheckboxesWithValidation from "@/components/inputs/checkbox";
import * as Swal from "sweetalert2";

export default {
  props: {
    _id: {
      required: false,
    },
  },
  components: {
    PanelLateral,
    BInputWithValidation,
    BDatepickerWithValidation,
    BRadiosWithValidation,
    BCheckboxesWithValidation,
  },
  data() {
    return {
      activeStep: 4,
      zoom: 23,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: [-11.9962683, -77.1184224],
      mapsUrl: `https://www.google.com/maps/place/Bodega+La+Esperanza/@-11.9962683,-77.1184224,15z`,
      center: { lat: -11.9962683, lng: -77.1184224 },
      model: {},
    };
  },
  async asyncData({ params, store }) {},
  methods: {
    closePanel() {
      this.$emit("closePanel");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .step-item {
  padding: 1em 0;
}

.marker {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  padding: 7px 11px;
  display: flex;
  align-items: center;
  width: 116px;
  position: absolute;
  right: 0;
  top: -8px;
  color: var(--color-primary);
  img {
    margin-right: 5px;
  }
}

.content-step {
  min-height: 45px;
  position: relative;
  &.is-previous {
    .state {
      color: var(--color-primary);
    }
  }
  &.active {
    .state {
      background: rgba(32, 80, 113, 0.1);
      border-radius: 4px;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: var(--color-primary);
      padding: 5px 8px;
      display: inline-block;
      margin-bottom: 8px;
    }
  }
  .state {
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #9299a0;
    margin-bottom: 13px;
  }
  .text {
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #9299a0;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 10px;
  .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: var(--color-primary);
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  .isotipe {
    width: 28px;
    margin-right: 14px;
    height: 28px;
  }
}

.download {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 7px 20px;
  justify-content: center;
  font-weight: 600;
  font-size: 10px;
  cursor: pointer;
  line-height: 12px;

  color: var(--color-primary);
  img {
    margin-right: 5px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .client {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #2b2b2b;
  }
  .icon {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    width: 28px;
    height: 28px;
    /deep/ i {
      color: var(--color-primary);
    }
  }
}

.list {
  background-color: transparent;
  border: none;
  box-shadow: none;
  li {
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 5px;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #2b2b2b;
      img {
        margin-right: 8px;
      }
    }
  }
}

.order {
  display: block;
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #2b2b2b;
    span {
      color: red;
    }
  }
  .driver {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      border: 1px solid #dee2e6;
      border-radius: 8px;
      width: 28px;
      height: 28px;
      margin-left: 12px;
      /deep/ i {
        color: var(--color-primary);
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
}

.driver-image {
  border-radius: 50px;
  position: relative;
}

.steps {
  /deep/ .step-content {
    padding: 0 1rem;
    .step-item {
      display: block !important;
    }
  }
}

.content-map {
  width: 100%;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
  margin-top: 18px;
  img {
    width: 100%;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
  }
}

/deep/ .b-steps {
  .steps {
    .step-item {
      &:not(:first-child)::before {
        top: 12px;
      }
      .step-marker {
        background: #dee2e6;
        border-radius: 50px;
        border: none;
        width: 25px;
        height: 25px;
        font-size: 0;
      }
      .step-details {
        .step-title {
          font-size: 12px;
          color: var(--color-primary);
          margin-top: 5px;
          font-weight: 600;
          display: none;
        }
      }

      &.is-previous {
        .step-marker {
          background: var(--color-primary);
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-image: url(~assets/images/check-white.svg);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center center;
            left: 8px;
            top: 8px;
          }
        }
      }
      &.is-active {
        .step-marker {
          background: #f8f8fa;
          position: relative;
          border: 1px solid var(--color-primary);
          &::after {
            content: "";
            position: absolute;
            background-color: var(--color-primary);
            width: 15px;
            border-radius: 50px;
            height: 15px;
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center center;
            left: 4px;
            top: 4px;
          }
        }
      }
    }
  }
}
</style>

