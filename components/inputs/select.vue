<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules" v-slot="{ errors }">
    <b-field v-bind="$attrs" :type="{ 'is-danger': errors[0]}" :message="errors">
      <p v-show="description" v-html="description" class="description"></p>
      <b-select v-bind="$attrs" v-model="innerValue">
        <slot />
      </b-select>
    </b-field>
  </ValidationProvider>
</template>
<style lang="scss" scoped>
/deep/ .field {
  flex-direction: column;
}

.description {
  font-size: 14px;
  line-height: 15px;
  font-weight: normal;
  margin-bottom: 20px;
}

/deep/ .select {
  select {
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
    &::placeholder {
      color: #adb5bd;
    }
  }
  &.is-danger {
    select {
      border-color: #f95555 !important;
    }
  }
  &.is-success {
    select {
      border-color: #66bb6a;
    }
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
    description: {
      type: null,
    },
  },
  data: () => ({
    innerValue: null,
  }),
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
