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
      <ValidationObserver tag="form" ref="observer" v-slot="{ passes }">
        <transition-group
          appear
          appear-active-class="animated fadeInUp"
          name="custom-classes-transition"
          :enter-active-class="isNext ? 'animated fadeInUp' : 'animated fadeInDown'"
          :leave-active-class="isNext ? 'animated fadeOutUp' : 'animated fadeOutDown'"
          mode="out-in"
        >
          <template v-for="(field) in structure">
            <div class="row" :key="field.position" v-if="field.position === activeField">
              {{activeField.length}}
              <div class="left">
                <span class="order">{{field.position}}.</span>
              </div>
              <div class="right">
                <BInputWithValidation
                  :rules="field.rules"
                  :type="field.type"
                  :label="field.label"
                  :name="field.name"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                  @singleValidation="onSingleValidation"
                />
                <transition-group
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInUp"
                  leave-active-class="animated fadeOutDown"
                >
                  <template  v-if="activeField === 1">
                    <a v-show="field.valid" :key="1" @click="next" class="btn primary">
                      Empezar
                      <img src="~assets/images/arrow-down.svg" alt />
                    </a>
                  </template>
                  <template  v-else-if="activeField === structure.length">
                    <a :key="2" v-show="field.valid" @click="passes(submit)" class="btn primary">
                      Enviar datos
                      <img src="~assets/images/arrow-down.svg" alt />
                    </a>
                  </template>
                  <template  v-else>
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
      <div class="next" v-if="activeField < structure.length" @click="next">Next</div>
      <div class="prev" v-if="activeField > 1" @click="prev">Previous</div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BSelectWithValidation from "@/components/inputs/select";
import BInputWithValidation from "@/components/inputs/input";
import BCheckboxesWithValidation from "@/components/inputs/checkbox";

export default {
  layout: "layout-register",
  name: "RegistroNegocio",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmation: "",
      subject: "",
      choices: [],
      showOk: false,
      activeField: 1,
      isNext: true,
      structure: [
        {
          position: 1,
          rules: "required|max:50",
          type: "text",
          name: "Razón Social",
          label: "Razón Social",
          value: "",
          valid: false,
          placeholder: 'Escribe tu respuesta'
        },
        {
          position: 2, 
          rules: 'required|digits:12|max:12',
          type: "number",
          name: "ruc",
          label: "RUC",
          value: "",
          valid: false,
          placeholder: 'Ingresa el RUC de tu empresa (no será público)'
        },
        {
          position: 3,
          rules: "required|email",
          type: "email",
          name: "pre",
          label: "Correo electrónico",
          value: "",
          valid: false,
        },
        {
          position: 4, 
          rules: 'required|max:9|min:7',
          type: "number",
          name: "phone",
          label: "Número de Teléfono / móvil",
          value: "",
          valid: false,
          placeholder: 'Escribe tu respuesta'
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
    nextStep() {
      this.currentStep++;
    },
    onSingleValidation(result, name) {
      let field = this.structure.find((field) => field.name === name);
      field.valid = result.valid;
    },
    submit() {
      console.log("Form submitted yay!");
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
  position: relative;
}
.content {
  max-width: 400px;
  height: 100%;
  width: 100%;
  position: relative;
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
  background-color: #fbe9e7;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  border-top: 1px dashed #ff5722;
  color: #ff5722;
}
.prev {
  right: calc(50% + 65px);
}
.next {
  right: calc(50% - 145px);
}
.next,
.prev {
  position: absolute;
  bottom: 10px;
  width: 70px;
  text-align: center;
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px dashed #ff5722;
  background-color: white;
  color: #ff5722;
  box-shadow: 1px 1px 1px 0px #9e9e9e;
}
</style>
