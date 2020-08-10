<template>
  <div class="register">
    <div class="content">
      <div class="intro">
        <img class="logo" src="~assets/images/logo-empresa.svg" alt />
        <div class="text">
          <h3>Historial</h3>
          <p>Esta es la vista de historial</p>
        </div>
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

export default {
  layout: "layout-app",
  name: "RegistroNegocio",
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
      typeDocuments: [
        {
          label: "DNI",
          value: "1",
        },
        {
          label: "RUC",
          value: "2",
        },
      ],
      structure: [
        {
          type: "datepicker",
          rules: "required",
          description: "aqui va",
          name: "birth_date",
          rules: "required",
          placeholder: "Escribe tu respuesta",
          label: "Fecha de Nacimiento",
        },
        {
          type: "select",
          name: "place",
          selected: null,
          rules: "required",
          placeholder: "Seleccionar Placeholder",
          label: "Select Placeholder",
          description: "dsadsada",
        },
        {
          type: "select",
          name: "typeDocument",
          selected: 2,
          rules: "required",
          placeholder: "Seleccionar",
          label: "Tipo de documento",
        },
        {
          rules: "required|max:10|alpha_num_spaces",
          type: "text",
          name: "Razón Social",
          label: "Razón Social",
          value: "",
          placeholder: "Escribe tu respuesta",
        },
        {
          rules: "required|max:50|min:2|alpha_num_spaces",
          type: "text",
          name: "ubication",
          label: "¿Donde está ubicado?",
          value: "",
          placeholder: "Escribe tu respuesta",
        },
        {
          rules: { required: true, digits: 12, max: 12 },
          type: "number",
          name: "ruc",
          label: "RUC",
          value: "",
          placeholder: "Ingresa el RUC de tu empresa (no será público)",
        },
        {
          rules: "required|email|max:50",
          type: "email",
          name: "email",
          label: "Correo electrónico",
          value: "",
        },
        {
          rules: "required|max:9|min:7",
          type: "number",
          name: "phone",
          label: "Número de Teléfono / móvil",
          value: "",
          placeholder: "Escribe tu respuesta",
        },
        {
          type: "checkbox",
          name: "drinks",
          choices: ["Coffee"],
          rules: "required",
          label: "Lorem ipsum",
        },
        {
          type: "radio",
          name: "typeLocal",
          selected: "",
          description: "dsadsada",
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
    onChangeSelect(field) {
      console.log(field);
    },
    onSingleValidation(result, name) {
      console.log(result, name);
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
