<template>
  <div class="register">
    <div class="content">
      <div class="intro">
        <img class="logo" src="~assets/images/logo-empresa.svg" alt />
        <div class="text">
          <h3>Como empresa</h3>
          <p>Ingresa los datos de tu local</p>
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
                    v-model="field.selected"
                  >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </BSelectWithValidation>
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
                    <a :key="2" @click="sendForm" class="btn primary">
                      Enviar datos
                      <img src="~assets/images/arrow-down.svg" alt />
                    </a>
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

export default {
  layout: "layout-postulate",
  name: "postulaClient",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
    BRadiosWithValidation,
  },
  data() {
    return {
      activeField: 1,
      isNext: true,
      structure: [
        {
          position: 1,
          rules: "required|max:50",
          type: "text",
          name: "social_reazon",
          label: "Razón Social",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 2,
          rules: "required|digits:12|max:12",
          type: "number",
          name: "ruc",
          label: "RUC",
          value: "",
          valid: false,
          placeholder: "Ingresa el RUC de tu empresa (no será público)",
        },
        {
          position: 3,
          rules: "required|email|max:50",
          type: "email",
          name: "email",
          label: "Correo electrónico",
          value: "",
          valid: false,
        },
        {
          position: 4,
          rules: "required|max:9|min:7",
          type: "number",
          name: "phone",
          label: "Número de Teléfono / móvil",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 5,
          rules: "required|max:50|min:2|alpha_num_spaces",
          type: "text",
          name: "ubication",
          label: "¿Donde está ubicado?",
          value: "",
          valid: false,
          placeholder: "Escribe tu respuesta",
        },
        {
          position: 6,
          type: "radio",
          name: "type_local",
          selected: "",
          rules: "required",
          label: "¿Qué tipo de local comercial tienes?",
          valid: false,
          options: [
            {
              label: "Bodega/Bazar/Abarrotes",
              value: "Bodega/Bazar/Abarrotes",
            },
            {
              label: "Tienda de Ropa",
              value: "Tienda de Ropa",
            },
            {
              label: "Farmacia",
              value: "Farmacia",
            },
            {
              label: "Tienda de muebles",
              value: "Tienda de muebles",
            },
            {
              label: "Artículos para mascotas",
              value: "Artículos para mascotas",
            },
            {
              label: "Otros",
              value: "Otros",
            },
          ],
        },
        {
          position: 7,
          type: "checkbox",
          name: "accept_terms",
          checked: false,
          label: "Términos y condiciones",
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
    onChangeRadio(field) {
      field.valid = field.value;
    },
    onSingleValidation(result, name) {
      let field = this.structure.find((field) => field.name === name);
      field.valid = result.valid;
    },
    async sendForm() {
      const observer = this.$refs.observer;
      const success = await observer.validate();
      if (success) {
        const payload = {};
        this.structure.forEach((element) => {
          payload[element.name] = element.value;
        });
        this.$router.push('/exito-negocio')
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
      color: var(--color-client);
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
