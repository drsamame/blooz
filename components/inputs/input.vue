<template>
  <ValidationProvider
    ref="refProvider"
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
    v-slot="{ errors }"
  >
    <b-field v-bind="$attrs" :type="{ 'is-danger': errors[0] }" :message="errors">
      <b-input
        v-model="innerValue"
        v-bind="$attrs"
        :has-counter="false"
        :placeholder="$attrs.placeholder || $attrs.label"
        :maxlength="maxNumber"
        :class="$attrs.name"
        @keypress.native="filter"
      ></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { alpha_dash } from "vee-validate/dist/rules";

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
    innerValue: "",
  }),

  computed: {
    maxNumber() {
      let number = "";

      this.rules.split("|").find((item) => {
        let isMax = item.indexOf("max") !== -1;

        if (isMax) {
          number = item.match(/[0-9]+/g)[0];
        }
      });

      return number;
    },
  },

  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);

      const provider = this.$refs.refProvider.validateSilent().then((resp) => {
        this.$emit("singleValidation", resp, this.$attrs.name);
      });
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  methods: {
    filter(evt) {
      let maxLength = this.maxNumber;

      if (evt.target.value.length < parseInt(maxLength)) {
        if (this.$attrs.type === "number") {
          let keyCode = evt.keyCode ? evt.keyCode : evt.which;
          if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
            evt.preventDefault();
          }
        }
      } else {
        evt.preventDefault();
      }
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .field {
  .control {
    &.phone {
      &::before {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-primary);
        content: "+51";
        position: absolute;
        z-index: 1;
        top: 3px;
      }
      input {
        padding-left: 30px;
      }
    }
    .counter {
      display: none;
    }
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
