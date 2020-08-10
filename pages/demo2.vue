<template>
  <div class="register">
    <div class="content">
      <div class="intro">
        <img class="logo" src="~assets/images/logo-empresa.svg" alt />
        <div class="text">
          <h3>Blooz Ejemplo Formularios</h3>
        </div>
      </div>
      <ValidationObserver tag="form" ref="observer" v-slot="{ passes }">
        
        <BSelectWithValidation
          type="select"
          name="typeDocument"
          selected="1"
          rules="required"
          placeholder="Seleccionar"
          label="Tipo de documento"
          v-model="model.typodocumento"
          @change.native="onChangeSelect()"
        >
          <template v-for="item in typeDocuments">
            <option :value="item.value" :key="item.value">{{item.label}}</option>
          </template>
        </BSelectWithValidation>


        <BInputWithValidation
          :rules="{ required: true, digits: maxDigits, max: maxDigits }"
          type="number"
          name="ruc"
          label="RUC"
          placeholder="Ingresa el RUC de tu empresa (no será público)"
          v-model="model.document"
          @singleValidation="onSingleValidation"
        />

        <a @click="passes(submit)" class="btn primary">Enviar datos</a>
      </ValidationObserver>
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
  layout: "layout-register",
  name: "RegistroNegocio",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
    BRadiosWithValidation,
  },
  created(){
  },
  data() {
    return {
      model: {
        document: 1321321,
      },
      maxDigits: 12,
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
    };
  },
  mounted() {},
  methods: {
    onChangeRadio(field) {
      console.log(field);
      console.log("change a radio");
    },
    onChangeCheckbox(field) {
      console.log(field);
      console.log("change a checkbbox");
    },
    onChangeSelect() {
      this.maxDigits = (this.model.typodocumento === 2) ? 12:8;
    },
    onSingleValidation(result, name) {
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 60px;
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
  form {
    width: 100%;
  }
}

.intro {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 60px;
  margin-top: 150px;
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
</style>
