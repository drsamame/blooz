<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules" v-slot="{ errors }">
    <div class="block">
      <label v-show="$attrs.label" class="label">{{$attrs.label}}</label>
      <p v-show="description" v-html="description" class="description"></p>
      <slot />
      <p class="has-text-danger">{{ errors[0] }}</p>
    </div>
  </ValidationProvider>
</template>
<style lang="scss" scoped>
.block {
  .description {
    font-size: 14px;
    line-height: 15px;
    font-weight: normal;
    margin-bottom: 20px;
  }
}
/deep/ .has-text-danger {
  font-size: 12px;
}
.label {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-primary);
}
/deep/ .b-checkbox {
  &.checkbox {
    display: flex;
    flex: 1;
    margin-bottom: 12px;
    .control-label {
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #2b2b2b;
      padding-left: 12px;
      p {
        line-height: 20px;
        a {
          &:hover {
            text-decoration: underline;
            color: var(--color-primary);
          }
        }
      }
    }
    input[type="checkbox"] {
      &:checked {
        & + .check {
          background-color: rgba(32, 80, 113, 0.1);
          background-image: url(~assets/images/check.svg);
          border: 1px solid #205071;
          border-radius: 4px;
        }
      }
      & + .check {
        transition: none;
        box-shadow: none !important;
        border: 1px solid #adb5bd;
        border-radius: 4px;
      }
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
    description: {
      type: null,
    },
  },
};
</script>
