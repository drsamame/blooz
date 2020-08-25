<template>
  <PanelLateral @closePanel="closePanel">
    <template slot="panel-body">
      <div class="new-order">
        <h1 class="title">Nuevo pedido</h1>
      </div>
      <div class="steps">
        <b-steps
          v-model="activeStep"
          :has-navigation="false"
          label-position="bottom"
          mobile-mode="minimalist"
        >
          <b-step-item step="1" label="Pedido">
            <div class="step1 body-step">
              <div class="top">
                <h2 class="subtitle">
                  Pedidos
                  <span>({{orders.length}})</span>
                </h2>

                <b-button class="btn trans" @click="addOrder">Agregar Pedido</b-button>
              </div>

              <b-tabs type="is-boxed">
                <template v-for="(order, index) in orders">
                  <b-tab-item :key="index">
                    <template slot="header">
                      <div class="title-tab">
                        {{index +1}}
                        <b-icon
                          size="is-small"
                          icon="close"
                          v-show="index !== 0"
                          @click.native.stop="removeOrder(index)"
                        ></b-icon>
                      </div>
                    </template>

                    <ValidationObserver tag="form" ref="formOrder" v-slot="{ passes }">
                      <h3>Ingresa los siguientes datos</h3>
                      <div class="field">
                        <BInputWithValidation
                          rules="max:50|required|alpha_spaces"
                          type="text"
                          name="nombre cliente"
                          placeholder="Nombre del cliente"
                          v-model="order.model.client_name"
                        />
                      </div>
                      <div class="field">
                        <BInputWithValidation
                          rules="required|max:9|min:7"
                          type="number"
                          name="telefono"
                          placeholder="Teléfono del cliente"
                          v-model="order.model.client_phone"
                        />
                      </div>
                      <div class="field">
                        <BDatepickerWithValidation
                          rules="required"
                          name="Fecha de entrega"
                          placeholder="Fecha de entrega"
                          v-model="order.model.delivery_day"
                        ></BDatepickerWithValidation>
                      </div>
                      <div class="field">
                        <BInputWithValidation
                          rules="max:50|required|alpha_num_spaces"
                          type="text"
                          name="Dirección de recojo"
                          placeholder="Dirección de recojo"
                          v-model="order.model.pick_address"
                        />
                      </div>
                      <div class="field">
                        <BInputWithValidation
                          rules="max:50|required|alpha_num_spaces"
                          type="text"
                          name="Dirección de entrega"
                          placeholder="Dirección de entrega"
                          v-model="order.model.delivery_address"
                        />
                      </div>
                      <div class="field">
                        <BInputWithValidation
                          rules="max:350|alpha_num_spaces"
                          type="textarea"
                          name="Información extra"
                          placeholder="Información extra para el repartidor"
                          v-model="order.model.extraInfo"
                        />
                      </div>
                      <h3 class="title-bottom">Agregar Paquetes +</h3>
                
                      <div class="field">
                        
                      </div>

                      <div class="control-label">
                        <div class="item medium">
                          <img class="image" src="~assets/images/isotipe.svg" alt />
                          <div class="name">Mediano</div>
                          <p class="description">Como un microondas</p>
                        </div>
                        <div class="content-price">
                          <BInputWithValidation
                            rules="max:5|required|max_value:5000|min_value:1000"
                            type="number"
                            label="Precio aproximado"
                            class="price"
                            name="precio aproximado"
                            v-model="value"
                          />
                          <b-slider :type="'is-primary'" v-model="value"></b-slider>
                        </div>
                      </div>
                      <b-button class="btn trans" @click="closePanel">Cancelar</b-button>
                      <b-button class="btn primary" @click="passes(submitStep1)">
                        Continuar
                        <img src="~assets/images/arrow-down.svg" alt />
                      </b-button>
                    </ValidationObserver>
                  </b-tab-item>
                </template>
              </b-tabs>
            </div>
          </b-step-item>

          <b-step-item step="2" label="Pago">
            <div class="step2 body-step">
              <div class="contentCard">
                <transition-group name="fade">
                  <template v-if="isOpenCard">
                    <ValidationObserver
                      tag="form"
                      ref="formNewCard"
                      v-slot="{ passes }"
                      key="newCard"
                    >
                      <h3>Agrega un medio de pago</h3>
                      <div class="field">
                        <BInputWithValidation
                          rules="required|max:8|min:8|digits"
                          type="number"
                          name="Numero de DNI"
                          placeholder="Numero de DNI"
                          v-model="card.dni"
                        />
                      </div>
                      <div class="field">
                        <BInputWithValidation
                          rules="required|max:19|min:13"
                          type="number"
                          name="Numero de tarjeta"
                          placeholder="Numero de tarjeta"
                          v-model="card.number"
                        />
                      </div>
                      <div class="row is-two">
                        <div class="field">
                          <BInputWithValidation
                            :rules="{ required:true, max:5, min:5, num_slash:true}"
                            type="text"
                            name="Vencimiento"
                            placeholder="Vencimiento (MM/AA)"
                            v-model="card.date"
                          />
                        </div>
                        <div class="field">
                          <BInputWithValidation
                            rules="required|max:3|min:3"
                            type="number"
                            name="Código CCI"
                            placeholder="Código CCI"
                            v-model="card.cci"
                          />
                        </div>
                      </div>
                      <div class="acceptedCards">
                        <p>Tarjetas aceptadas:</p>
                        <div class="images">
                          <img src="~assets/images/visa.svg" alt />
                          <img src="~assets/images/master.svg" alt />
                          <img src="~assets/images/american.svg" alt />
                          <img src="~assets/images/diners.svg" alt />
                        </div>
                      </div>
                      <div class="field">
                        <BCheckboxesWithValidation name="guardar tarjeta">
                          <b-checkbox v-model="card.saveCard" native-value="true">Guardar tarjeta</b-checkbox>
                        </BCheckboxesWithValidation>
                      </div>

                      <b-button class="btn trans" @click="isOpenCard = false">Cancelar</b-button>
                      <b-button class="btn primary" @click="passes(onNewCard)">
                        Continuar
                        <img src="~assets/images/arrow-down.svg" alt />
                      </b-button>
                    </ValidationObserver>
                  </template>
                  <template v-else>
                    <ValidationObserver
                      tag="form"
                      ref="formPayment"
                      v-slot="{ passes }"
                      key="payment"
                    >
                      <h3>Selecciona un medio de pago</h3>
                      <div class="addCard" @click="isOpenCard = !isOpenCard">
                        <div class="plus">+</div>Agregar tarjeta
                      </div>
                      <div class="card-list">
                        <div class="field">
                          <BRadiosWithValidation rules="required" name="cards" class="radio-card">
                            <b-radio
                              v-model="model.card"
                              :native-value="item.name"
                              v-for="item in cards"
                              :key="item.name"
                            >
                              <div class="item">
                                <img class="image" :src="`/images/${item.url}.svg`" alt />
                                <p class="description">{{item.number}}</p>
                              </div>
                            </b-radio>
                          </BRadiosWithValidation>
                        </div>
                      </div>
                      <b-button class="btn trans" @click="closePanel">Cancelar</b-button>
                      <b-button class="btn primary" @click="passes(submitStep2)">
                        Continuar
                        <img src="~assets/images/arrow-down.svg" alt />
                      </b-button>
                    </ValidationObserver>
                  </template>
                </transition-group>
              </div>
            </div>
          </b-step-item>

          <b-step-item step="3" label="Social">
            <div class="step3 body-step">
              <img class="image" src="~assets/images/logo-empresa.svg" alt />
              <h1 class="title has-text-centered">¡El pedido ha sido programado!</h1>
              <p>
                Se ha programado el pedido
                <b>Nº 0001</b>, ya está disponible el rotulado descargable:
              </p>
              <div class="group">
                <img src="~assets/images/isotipe.svg" alt />
                <div class="download">
                  <img src="~assets/images/download.svg" alt />
                  Rotulado
                </div>
              </div>
              <b-button class="btn primary" @click="submitOrder">Finalizar</b-button>
            </div>
          </b-step-item>
        </b-steps>
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
      packSize: "",
      sizes: [],
      typeDocuments: [
        {
          label: "DNI",
          value: 1,
        },
        {
          label: "RUC",
          value: 2,
        },
      ],
      activeStep: 0,
      value: 20,
      orders: [
        {
          number: 1,
          model: {},
        },
      ],
      model: {},
      card: {},
      cards: [
        {
          name: "visa",
          url: "visa",
          number: "123456****1234",
        },
        {
          name: "master",
          url: "master",
          number: "123456****1234",
        },
        {
          name: "diners",
          url: "diners",
          number: "123456****1234",
        },
        {
          name: "american",
          url: "american",
          number: "123456****1234",
        },
      ],
      isOpenCard: false,
    };
  },
  async created() {},
  methods: {
    removeOrder(index) {
      if (index !== 0) {
        this.orders.splice(index, 1);
      }
    },
    addOrder() {
      const order = {
        number: 2,
        model: {},
      };
      this.orders.push(order);
    },
    closePanel() {
      this.$emit("closePanel");
    },
    submitStep1() {
      this.activeStep = 1;
    },
    submitStep2() {
      this.activeStep = 2;
    },
    submitOrder() {
      this.closePanel();
    },
    onNewCard() {
      const card = {
        name: this.card.name,
        url: this.card.name,
        url: "visa",
        date: this.card.date,
        number: this.card.number,
      };
      (this.model.card = "visa"), this.cards.push(card);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .b-slider {
  .b-tooltip {
    &.is-top.is-primary {
      &::before {
        border-top: 5px solid var(--color-primary) !important;
      }
      &::after {
        background: var(--color-primary) !important;
      }
    }
  }
  &.is-primary {
    .b-slider-fill {
      background-color: var(--color-primary) !important;
    }
  }
}
/deep/ .tabs {
  ul {
    li {
      min-width: 80px;
      a {
        .title-tab {
          /deep/ .mdi-close {
            background-color: #dee2e6;
            border-radius: 50px;
            font-size: 12px;
            line-height: 10px;
            color: #215070;
            padding: 0 2px;
            &::before {
              line-height: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
    li.is-active a {
      background-color: var(--color-primary);
      color: #fff;
      .title-tab {
        /deep/ .mdi-close {
          background-color: transparent;
          color: #fff;
        }
      }
    }
  }
}
.title-tab {
  font-size: 16px;
  font-weight: 500;
  /deep/ .mdi-close {
  }
}
.title {
  font-weight: bold;
  font-size: 20px;
  margin-top: 14px;
  line-height: 24px;
  color: var(--color-primary);
  margin-bottom: 24px;
}
.subtitle {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-primary);
  margin: 0;
}

.body-step {
  .top {
    display: flex;
    margin-top: 14px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .btn {
      margin-right: 0 !important;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
    color: var(--color-primary);
    &.title-bottom {
      margin-top: 32px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &.step2 {
    .btn {
      margin-top: 120px;
    }
  }

  &.step3 {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    .image {
      width: 50px;
      margin: 0 auto;
      height: 50px;
      margin-bottom: 24px;
      margin-top: 100px;
    }
    .title {
      margin-bottom: 20px;
      margin-top: 0;
    }
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      max-width: 360px;
      margin: auto;
      color: #2b2b2b;
    }
    .group {
      display: flex;
      margin-bottom: 0 auto;
      justify-content: center;
      margin-top: 40px;
    }
    .btn {
      margin-top: 120px;
      max-width: 120px;
    }
    .download {
      margin-left: 17px;
      width: auto;
      padding: 15px;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */
      color: var(--color-primary);
      img {
        margin-right: 10px;
      }
    }
  }

  .btn {
    span {
      img {
        margin-left: 10px;
        transform: rotate(-90deg);
      }
    }
    &.trans {
      margin-right: 20px;
      color: var(--color-primary);
    }
  }

  form {
    .field {
      margin-bottom: 24px;
    }
  }
}

/deep/ .datepicker {
  .field {
    flex-direction: row;
  }
  .input {
    background-image: url(~assets/images/calendar.svg);
    background-repeat: no-repeat;
    background-position: right center;
    @include tablet {
      background: none;
    }
    &.is-danger {
      background-image: none;
    }
  }
}

/deep/ .step-content {
  padding: 0 !important;
}

/deep/ .b-steps {
  .steps {
    margin-bottom: 30px;
    padding: 0;
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
            left: 7px;
            top: 7.5px;
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
            left: 3.5px;
            top: 3.5px;
            @include tablet {
              left: 4px;
            }
          }
        }
      }
    }
  }
}

.field {
  /deep/ .radio {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 14px;
    margin-right: 0;
    border-radius: 4px;
    align-items: center;
    /deep/ .check {
      background-color: transparent !important;
      border: none !important;
      position: absolute !important;
      right: 0px !important;
      right: 20px !important;
    }

    /deep/ input {
      &:checked {
        + .check {
          border: none !important;
          width: 24px;
          height: 12px;
          background-repeat: no-repeat !important;
          background-size: 100% 100% !important;
          background-color: transparent !important;
          background-image: url(~assets/images/check.svg) !important;
          &::before {
            display: none;
          }
        }
        ~ .control-label {
          background: rgba(32, 80, 113, 0.1) !important;
          border: 1px solid var(--color-primary) !important;
        }
      }
    }
    .image {
      width: 40px;
      height: 40px;
    }
    .name {
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: var(--color-primary);
      margin-bottom: 2px;
    }
    .description {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #2b2b2b;
    }
    /deep/ .control-label {
      padding-left: 0;
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      margin-right: 0;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      height: 80px;
      align-items: center;
      padding: 20px;
      .item {
        position: relative;
        flex: 1;
        padding-left: 60px;
        .image {
          position: absolute;
          left: 0;
          top: -4px;
        }
      }
    }
  }

  .radio-card {
    /deep/.control-label {
      height: 48px;
      .item {
        padding-left: 40px;
        .image {
          height: 18px;
          top: -1px;
          left: -8px;
        }
      }
    }
  }
}

.control-label {
  padding-left: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  align-items: flex-start;
  padding: 20px;
  .item {
    position: relative;
    flex: 1;
    padding-left: 60px;
    .name {
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: var(--color-primary);
      margin-bottom: 2px;
    }
    .description {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #2b2b2b;
    }
    .image {
      position: absolute;
      left: 0;
      top: -4px;
      width: 40px;
    }
  }
  .content-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    flex: 1;
    width: 100%;
    /deep/ .label {
      font-size: 12px;
      color: var(--color-primary);
    }
    /deep/ .aproximado {
      max-width: 120px;
      position: relative;
      &::before {
        content: "S/";
        position: absolute;
        left: 0;
        font-size: 18px;
        bottom: 0;
        font-weight: bold;
        color: var(--color-primary);
      }

      input {
        font-weight: bold;
        padding-left: 25px;
        font-size: 25px;
        color: var(--color-primary);
      }
    }
  }
}

.addCard {
  display: flex;
  width: 160px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  .plus {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    width: 28px;
    height: 28px;
    font-size: 24px;
    text-align: center;
    padding-top: 5px;
    font-weight: 500;
    color: var(--color-primary);
    margin-right: 12px;
  }
  color: var(--color-primary);
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}

.contentCard {
  form {
    position: absolute;
    width: 100%;
    top: 0;
    min-height: 600px;
  }
  .acceptedCards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .images {
      display: flex;
      img {
        margin-left: 8px;
      }
    }
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;
      color: #2b2b2b;
    }
  }
  .row {
    &.is-two {
      display: flex;
      .field {
        &:first-child {
          flex: 2;
          margin-right: 20px;
        }
        &:last-child {
          flex: 1;
        }
      }
    }
  }
}

.download {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  width: 28px;
  cursor: pointer;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

