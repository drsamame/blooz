<template>
  <div class="listado">
    <h2 class="title">Mis pedidos</h2>
    <div class="header">
      <div class="filters">
        <div class="field">
          <BDatepickerWithValidation name="date" placeholder="Hoy" v-model="model.order"></BDatepickerWithValidation>
        </div>
        <div class="field">
          <BInputWithValidation
            :rules="'max:50|alpha_num_spaces'"
            type="text"
            name="filtro"
            placeholder="Nº pedido, Nombre"
            v-model="model.searchWord"
          />
        </div>
      </div>
      <div class="actions">
        <b-button class="btn primary" @click="showPanelDetailOrder = true">
          <img src="~assets/images/plus.svg" alt />Nuevo pedido
        </b-button>
      </div>
    </div>
    <section class="body">
      <div class="desktop is-hidden-mobile">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <h4 class="title programmed">
                <div class="circle"></div>Programados
                <span class="number">(3)</span>
              </h4>
              <div class="content-cards">
                <div class="card programmed">
                  <div class="left">
                    <div class="Norder">Nº 0001</div>
                    <div class="client">Cliente: Juan Rodriguez</div>
                    <div class="direction">
                      <img src="https://via.placeholder.com/18x18" alt />Javier Prado 240 Urb. Los…
                    </div>

                    <div class="date">
                      <img src="https://via.placeholder.com/18x18" alt />Por Confirmar
                    </div>
                    <div class="tag">Recoger en tienda</div>
                  </div>
                  <div class="right">
                    <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                    <div class="download">
                      <img src="~assets/images/download.svg" alt />
                    </div>
                  </div>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <h4 class="title in-process">
                <div class="circle"></div>En proceso
                <span class="number">(2)</span>
              </h4>
              <div class="content-cards">
                <div class="card in-process">
                  <div class="left">
                    <div class="Norder">Nº 0001</div>
                    <div class="client">Cliente: Juan Rodriguez</div>
                    <div class="direction">
                      <img src="https://via.placeholder.com/18x18" alt /> Javier Prado 240 Urb. Los…
                    </div>

                    <div class="date">
                      <img src="https://via.placeholder.com/18x18" alt />Martes 16 de Julio
                    </div>
                    <div class="tag">Recoger en tienda</div>
                  </div>
                  <div class="right">
                    <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                    <div class="download">
                      <img src="~assets/images/download.svg" alt />
                    </div>
                    <img class="driver-image" src="https://via.placeholder.com/28x28" alt />
                  </div>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <h4 class="title delivered">
                <div class="circle"></div>Entregados
                <span class="number">(2)</span>
              </h4>
              <div class="content-cards">
                <div class="card delivered">
                  <div class="left">
                    <div class="Norder">Nº 0001</div>
                    <div class="client">Cliente: Juan Rodriguez</div>
                    <div class="direction">
                      <img src="https://via.placeholder.com/18x18" alt />Javier Prado 240 Urb. Los…
                    </div>
                    <div class="date">
                      <img src="https://via.placeholder.com/18x18" alt />Martes 15 de Julio
                    </div>
                  </div>
                  <div class="right">
                    <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                    <div class="download">
                      <img src="~assets/images/download.svg" alt />
                    </div>
                    <img class="driver-image" src="https://via.placeholder.com/28x28" alt />
                  </div>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile is-flex-mobile">
        <b-tabs v-model="activeTab">
          <b-tab-item label="Programados">
            <div class="content-cards">
              <div class="card programmed">
                <div class="left">
                  <div class="Norder">Nº 0001</div>
                  <div class="client">Cliente: Juan Rodriguez</div>
                  <div class="direction">
                    <img src="https://via.placeholder.com/18x18" alt />Javier Prado 240 Urb. Los…
                  </div>
                  <div class="tag">Confirmar repartidor</div>
                </div>
                <div class="right">
                  <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                  <div class="download">
                    <img src="~assets/images/download.svg" alt />
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>

          <b-tab-item label="En proceso">
            <div class="content-cards">
              <div class="card in-process">
                <div class="left">
                  <div class="Norder">Nº 0001</div>
                  <div class="client">Cliente: Juan Rodriguez</div>
                  <div class="direction">Javier Prado 240 Urb. Los…</div>
                  <div class="tag">Recoger en tienda</div>
                </div>
                <div class="right">
                  <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                  <div class="download">
                    <img src="~assets/images/download.svg" alt />
                  </div>
                  <img class="driver-image" src="https://via.placeholder.com/28x28" alt />
                </div>
              </div>
            </div>
          </b-tab-item>

          <b-tab-item label="Programados">
            <div class="content-cards">
              <div class="card delivered">
                <div class="left">
                  <div class="Norder">Nº 0001</div>
                  <div class="client">Cliente: Juan Rodriguez</div>
                  <div class="direction">Javier Prado 240 Urb. Los…</div>
                </div>
                <div class="right">
                  <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                  <div class="download">
                    <img src="~assets/images/download.svg" alt />
                  </div>
                  <img class="driver-image" src="https://via.placeholder.com/28x28" alt />
                </div>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </section>
    <PanelOrder v-if="showPanelDetailOrder" @closePanel="closePanel"></PanelOrder>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BSelectWithValidation from "@/components/inputs/select";
import BInputWithValidation from "@/components/inputs/input";
import BCheckboxesWithValidation from "@/components/inputs/checkbox";
import BRadiosWithValidation from "@/components/inputs/radio";
import BDatepickerWithValidation from "@/components/inputs/datepicker";
import PanelOrder from "@/components/app/panels/PanelOrder";

export default {
  layout: "layout-app",
  name: "MisPedidos",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
    BRadiosWithValidation,
    BDatepickerWithValidation,
    PanelOrder,
  },
  data() {
    return {
      model: {},
      activeTab: 0,
      showPanelDetailOrder: false,
    };
  },
  mounted() {},
  methods: {
    addOrder(field) {
      console.log(field);
    },
    closePanel() {
      this.showPanelDetailOrder = false;
      console.log("panel");
    },
  },
};
</script>

<style lang="scss" scoped>
.listado {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  padding: 20px 40px;
}

.header {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: flex-start;
  height: 60px;
  .btn {
    img {
      display: inline-block;
      margin-right: 15px;
      margin-top: -1px;
      vertical-align: middle;
    }
  }
}

.title {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-primary);
}

.filters {
  display: flex;
  align-items: flex-start;
  .field {
    margin-right: 24px;
    min-width: 233px;
  }
}

.container {
  max-width: 100%;
}

.body {
  .title,
  .number {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: var(--color-primary);
    line-height: 17px;
    margin-right: 12px;
    .circle {
      border-radius: 5.5px;
      width: 11px;
      height: 11px;
      margin-right: 8px;
    }
    &.programmed {
      .circle {
        background: #ff6461;
      }
    }
    &.in-process {
      .circle {
        background-color: #ffd06b;
      }
    }
    &.delivered {
      .circle {
        background-color: #40c1c8;
      }
    }
  }
}

.row {
  margin-bottom: 30px;
  .left {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
    .order {
      margin-right: 10px;
    }
  }
  .right {
    flex: 1;
    /deep/ .field {
      label {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-primary);
        margin-bottom: 0;
      }
    }
    .btn {
      display: inline-flex;
      padding: 0 10px 0 25px;
      margin-top: 20px;
      img {
        margin: 10px;
        transform: rotate(-90deg);
      }
    }
  }
}

.mobile{
  display: none;
  width: 100%;
  .b-tabs{
    width: 100%;
  }
}

.card {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: none;
  display: flex;
  padding: 16px 16px 11px 16px;
  min-width: 260px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  align-items: stretch;
  min-height: 160px;
  &.programmed {
    .bar {
      background: #ff6461;
    }
  }
  &.in-process {
    .bar {
      background: #ffd06b;
    }
  }
  &.delivered {
    .bar {
      background: #40c1c8;
    }
  }
  .bar {
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
  }
  .Norder {
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 5px;
    color: var(--color-primary);
  }
  .client {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 10px;
    color: #2b2b2b;
  }
  .date {
    font-weight: normal;
    font-size: 11px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 6px;
    color: #2b2b2b;
    img {
      margin-right: 10px;
    }
  }
  .direction {
    font-weight: normal;
    font-size: 11px;
    line-height: 12px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #2b2b2b;
    img {
      margin-right: 10px;
    }
    color: #2b2b2b;
  }

  .tag {
    background: rgba(32, 80, 113, 0.1);
    border-radius: 4px;
    font-weight: 600;
    font-size: 11px;
    line-height: 12px;
    margin-bottom: spx;
    color: var(--color-primary);
    margin-top: 5px;
  }

  .right {
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  }

  .isotipe {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }

  .download {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .driver-image {
    border-radius: 50px;
    position: absolute;
    bottom: 14px;
  }
}
</style>
