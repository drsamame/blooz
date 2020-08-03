<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules" v-slot="{ errors }">
    <b-field v-bind="$attrs" :type="{ 'is-danger': errors[0]}" :message="errors">
      <b-datepicker
        v-bind="$attrs"
        v-model="innerValue"
        trap-focus
        :day-names="['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']"
        :month-names="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']"
      ></b-datepicker>
    </b-field>
  </ValidationProvider>
</template>
<style lang="scss" scoped>
/deep/ .mdi-chevron-left {
  color: var(--color-primary);
}
/deep/ .mdi-chevron-right {
  color: var(--color-primary);
}
/deep/ .has-text-danger {
  font-size: 12px;
}
/deep/ .field {
  .control {
    .icon {
      width: 20px;
      &.has-text-danger {
        .mdi {
          &:before {
            font-size: 19px;
            color: #f95555;
          }
        }
      }
      &.has-text-success {
        .mdi {
          &:before {
            font-size: 19px;
            color: #66bb6a;
          }
        }
      }
    }
    .input {
      border-right: none;
      border-left: none;
      border-top: none;
      box-shadow: none;
      border-radius: 0;
      padding-left: 0;
      font-size: 14px;
      height: 32px;
      color: #2b2b2b;
      border-color: #dee2e6;
      border-width: 2px;
      &:active {
        box-shadow: none;
      }
      &:focus {
        box-shadow: none;
      }
      &.is-danger {
        border-color: #f95555;
      }
      &.is-success {
        border-color: #66bb6a;
      }
      &::placeholder {
        color: #adb5bd;
      }
    }
  }
  .help {
    color: #f95555;
    font-size: 11px;
  }
}
</style>
<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  computed: {},
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>
