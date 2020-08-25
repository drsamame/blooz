<template>
  <div class="register">
    <div class="content">
      <div class="intro">
        <img class="logo" src="~assets/images/logo-repartidor.svg" alt />
        <div class="text">
          <h3>Como repartidor</h3>
          <p>Ingresa tus datos</p>
        </div>
      </div>
      <ValidationObserver tag="form" ref="observer">
        <transition-group
          appear
          appear-active-class="animated fadeInUp"
          name="custom-classes-transition"
          :enter-active-class="isNext ? 'animated fadeInUp' : 'animated fadeInDown'"
          :leave-active-class="isNext ? 'animated fadeOutUp' : 'animated fadeOutDown'"
          mode="out-in"
        >
          <template v-for="(field) in structure">
            <div class="row" :key="field.position" v-show="field.position === activeField">
              {{activeField.length}}
              <div class="left">
                <span class="order">{{field.position}}.</span>
              </div>
              <div class="right">
                <template
                  v-if="field.type === 'text' || field.type === 'email' || field.type === 'number'"
                >
                  <BInputWithValidation
                    :rules="field.rules"
                    :type="field.type"
                    :label="field.label"
                    :description="(field.description)? field.description: false"
                    :name="field.name"
                    :placeholder="field.placeholder"
                    v-model="field.value"
                    @singleValidation="onSingleValidation"
                  />
                </template>

                <template v-if="field.type === 'checkbox'">
                  <BCheckboxesWithValidation
                    :rules="field.rules"
                    :label="field.label"
                    :name="field.name"
                    :description="(field.description)? field.description: false"
                  >
                    <template v-for="item in field.options">
                      <b-checkbox v-model="field.value" :key="item.value">
                        <p v-html="item.label"></p>
                      </b-checkbox>
                    </template>
                  </BCheckboxesWithValidation>
                </template>

                <template v-if="field.type === 'radio'">
                  <BRadiosWithValidation
                    :rules="field.rules"
                    :label="field.label"
                    :name="field.name"
                    :description="(field.description)? field.description: false"
                    @change.native="onChangeRadio(field)"
                  >
                    <template v-for="item in field.options">
                      <b-radio v-model="field.value" :key="item.value" :native-value="item.value">
                        <p v-html="item.label"></p>
                      </b-radio>
                    </template>
                  </BRadiosWithValidation>
                </template>

                <template v-if="field.type === 'select'">
                  <BSelectWithValidation
                    :rules="field.rules"
                    :label="field.label"
                    :name="field.name"
                    expanded
                    :placeholder="field.placeholder"
                    v-model="field.value"
                    @change.native="onChangeSelect(field)"
                  >
                    <template v-for="item in field.options">
                      <option :value="item.value" :key="item.value">{{item.label}}</option>
                    </template>
                  </BSelectWithValidation>
                </template>

                <template v-if="field.type === 'datepicker'">
                  <BDatepickerWithValidation
                    :rules="field.rules"
                    :label="field.label"
                    :name="field.name"
                    :placeholder="field.placeholder"
                    :description="(field.description)? field.description: false"
                    v-model="field.value"
                    @input="onChangeDatepicker(field)"
                  ></BDatepickerWithValidation>
                </template>

                <transition-group
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInUp"
                  leave-active-class="animated fadeOutDown"
                >
                  <template v-if="activeField === 1">
                    <a v-show="field.valid" :key="1" @click="next" class="btn primary">
                      Empezar
                      <img src="~assets/images/arrow-down.svg" alt />
                    </a>
                  </template>
                  <template v-else-if="activeField === structure.length">
                    <b-button
                      :key="2"
                      class="btn primary"
                      @click.native.prevent="sendForm"
                      :loading="isLoading"
                    >
                      Enviar datos
                      <img src="~assets/images/arrow-down.svg" alt />
                    </b-button>
                  </template>
                  <template v-else>
                    <a :key="3" v-show="field.valid" @click="next" class="btn primary">
                      Continuar
                      <img src="~assets/images/arrow-down.svg" alt />
                    </a>
                  </template>
                </transition-group>
              </div>
            </div>
          </template>
        </transition-group>
      </ValidationObserver>
    </div>
    <div class="nav">
      <div class="next" v-if="activeField < structure.length" @click="next">
        <img src="~assets/images/select_arrow.svg" alt />
      </div>
      <div class="prev" v-if="activeField > 1" @click="prev">
        <img src="~assets/images/select_arrow.svg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BSelectWithValidation from "@/components/inputs/select";
import BInputWithValidation from "@/components/inputs/input";
import BCheckboxesWithValidation from "@/components/inputs/checkbox";
import BRadiosWithValidation from "@/components/inputs/radio";
import BDatepickerWithValidation from "@/components/inputs/datepicker";
import * as Swal from "sweetalert2";
import $backend from "@/services/backend";

export default {
  layout: "layout-postulate",
  name: "postulaDriver",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
    BRadiosWithValidation,
    BDatepickerWithValidation,
  },
  data() {
    return {
      activeField: 1,
      isLoading: false,
      isNext: true,
      structure: [
        {
          position: 1,
          rules: "required|max:50|min:2|alpha_spaces",
          type: "text",
          model: "first_name",
          name: "Nombres",
          label: "Nombres",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 2,
          rules: "required|max:50|min:2|alpha_spaces",
          type: "text",
          model: "last_name",
          label: "Apellidos",
          name: "Apellidos",
          value: "",
          valid: false,
          placeholder: "Escribe tus respuesta",
        },
        {
          position: 3,
          rules: "required|email|max:50",
          type: "email",
          model: "email",
          label: "Correo electrónico",
          name: "Correo electrónico",
          value: "",
          valid: false,
        },
        {
          position: 4,
          rules: "required|max:50|min:2|alpha_num_spaces",
          type: "text",
          model: "address",
          name: "¿Donde está ubicado?",
          label: "¿Donde está ubicado?",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 5,
          type: "select",
          model: "document_type",
          value: null,
          rules: "required",
          placeholder: "Tipo de documento",
          valid: false,
          label: "Tipo de documento",
          description: "Elige tu tipo de documento",
          options: [
            {
              label: "DNI",
              value: "dni",
            },
            {
              label: "CE",
              value: "ce",
            },
          ],
        },
        {
          position: 6,
          rules: "required|min:8|max:14",
          type: "number",
          model: "document_code",
          label: "Número de DNI o CE",
          name: "Número de DNI o CE",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 7,
          type: "datepicker",
          rules: "required",
          model: "birthdate",
          rules: "required",
          placeholder: "Escribe tu respuesta",
          label: "Fecha de Nacimiento",
          name: "Fecha de Nacimiento",
        },
        {
          position: 8,
          rules: "required|max:9|min:7|",
          type: "number",
          model: "phone_number",
          label: "Número de Teléfono / móvil",
          name: "Número de Teléfono / móvil",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 9,
          placeholder: "Escribe tu respuesta",
          label: "Información sobre tu vehículo",
          rules: "required|max:20|min:2|alpha_num_spaces",
          description: "Indicanos la marca",
          name: "marca",
          type: "text",
          model: "mark",
          valid: false,
        },
        {
          position: 10,
          label: "Información sobre tu vehículo",
          description: "Indicanos el modelo",
          placeholder: "Escribe tu respuesta",
          name: "modelo",
          rules: "required|max:20|min:2|alpha_num_spaces",
          type: "text",
          model: "model",
          valid: false,
        },
        {
          position: 11,
          label: "Información sobre tu vehículo",
          description: "Indicanos el año",
          name: "año del vehículo",
          placeholder: "Escribe tu respuesta",
          rules: "required|max:4|min:2",
          type: "number",
          model: "year",
          valid: false,
        },
        {
          position: 12,
          label: "Información sobre tu vehículo",
          description: "Indicanos la placa",
          name: "placa",
          placeholder: "Escribe tu respuesta",
          rules: "required|max:8|min:2|alpha_dash",
          type: "text",
          model: "car_plate",
          valid: false,
        },
        {
          position: 13,
          type: "radio",
          model: "car_owner",
          rules: "required",
          label: "Información sobre tu vehículo",
          description: "Indicanos si eres dueño",
          description: "propiedad",
          valid: false,
          options: [
            {
              label: "Si",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ],
        },
        {
          position: 14,
          type: "radio",
          model: "fuel_type",
          rules: "required",
          label: "Información sobre tu vehículo",
          description: "Indicanos el tipo de combustible ",
          name: "combustible ",
          valid: false,
          options: [
            {
              label: "Gasolina",
              value: "GASOLINE",
            },
            {
              label: "Petroleo / Diesel",
              value: "PETROL/DIESEL",
            },
            {
              label: "Gas",
              value: "GAS",
            },
          ],
        },
        {
          position: 15,
          type: "radio",
          model: "work_hours",
          rules: "required",
          label: "¿Cuantas horas a la semana estarías dispuesto a trabajar",
          name: "disponilidad",
          valid: false,
          options: [
            {
              label: "Mas de 25 horas a la semana",
              value: "MINOR25",
            },
            {
              label: "Menos de 25 horas a la semana",
              value: "MAYOR25",
            },
          ],
        },
        {
          position: 16,
          type: "checkbox",
          model: "accept_terms",
          checked: false,
          description: "",
          label: "Términos y condiciones",
          name: "Términos y condiciones",
          options: [
            {
              label:
                "Acepto los <a href='#!' target='_blank'>términos y condiciones</a> y <a href='#!' target='_blank'>políticas de privacidad</a> de Blooz",
            },
          ],
          rules: "required",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    next() {
      this.isNext = true;
      this.activeField += 1;
    },
    prev() {
      this.isNext = false;
      this.activeField -= 1;
    },
    onChangeSelect(field) {
      console.log(field);
      field.value;
      field.valid = true;
    },
    onChangeDatepicker(field) {
      field.valid = field.value;
    },
    onChangeRadio(field) {
      field.valid = field.value;
    },
    onSingleValidation(result, name) {
      let field = this.structure.find((field) => field.name === name);
      field.valid = result.valid;
    },
    async submitForm(payload) {
      this.isLoading = true;
      try {
        const response = await $backend.registerDriver(payload);
        console.log(response); 
        this.isLoading = false;
        this.$router.push("/exito-repartidor");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Opss..",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn primary",
          },
          confirmButtonText: "Entendido",
          html: `<p class="popup-content-text">${err.response.error_message}</p>`,
        });
        this.isLoading = false;
      }
    },
    async sendForm() {
      const observer = this.$refs.observer;
      const success = await observer.validate();
      if (success) {
        const payload = {};
        const vehicle = {};
        this.structure.forEach((element) => {
          if (element.label === "Información sobre tu vehículo") {
            vehicle[element.model] = element.value;
          } else {
            payload[element.model] = element.value;
          }
        });
        payload["deliver_car"] = vehicle;
        this.submitForm(payload);
      } else {
        for (const key of Object.keys(observer.fields).sort()) {
          if (observer.fields[key].invalid) {
            this.activeField = this.structure.find((item) => {
              return item.name === key;
            }).position;
            return;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-color: #fff;
  height: 100vh;
  min-height: 670px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.content {
  max-width: 450px;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0 25px;
  margin-bottom: 0;
  margin-top: -120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.intro {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 60px;
  .logo {
    width: 45px;
    height: 45px;
    margin-right: 24px;
  }
  .text {
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      color: var(--color-driver);
      margin-bottom: 8px;
    }
    p {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-primary);
    }
  }
}

.form {
  position: relative;
}

.row {
  position: absolute;
  width: 100%;
  left: 0;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  margin: 5px;
  height: auto;
  display: flex;
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
        line-height: 24px;
        color: var(--color-primary);
      }
    }
    .btn {
      display: inline-flex;
      padding: 0 10px 0 25px;
      margin-top: 20px;
      /deep/ span {
        display: flex;
        align-items: center;
      }
      img {
        margin: 10px;
        transform: rotate(-90deg);
      }
    }
  }
}

.nav {
  bottom: 0;
  left: 0;
  height: 60px;
  max-width: 1152px;
  position: relative;
  width: 100%;
  @include tablet {
    margin-right: 20px;
    max-width: 960px;
  }
}
.prev {
  right: 32px;
  img {
    transform: rotate(180deg);
  }
}
.next {
  right: 0;
}
.next,
.prev {
  position: absolute;
  bottom: 0;
  width: 30px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 30px;
  border-radius: 8px;
  img {
    width: 16px;
  }
}
</style>
