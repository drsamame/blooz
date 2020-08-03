<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules" v-slot="{ errors }">
    <div class="block">
      <label v-show="$attrs.label" class="label">{{$attrs.label}}</label>
      <slot />
      <p class="has-text-danger">{{ errors[0]}}</p>
    </div>
  </ValidationProvider>
</template>
<style lang="scss" scoped>
.label {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  color: var(--color-primary);
}
/deep/ .has-text-danger{
  font-size: 12px;
}
/deep/ .b-radio {
  &.radio {
    display: flex;
    flex: 1;
    margin-bottom: 12px;
    .control-label {
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #2b2b2b;
      padding-left: 12px;
    }
    input[type="radio"] {
      &:checked {
        & + .check {
          background: rgba(32, 80, 113, 0.1);
          border: 1px solid #205071;
          border-radius: 12px;
          box-shadow: none;
        }
      }
      & + .check {
        background: #ffffff ;
        border: 1px solid #adb5bd ;
        border-radius: 12px ;
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
  },
};
</script>
