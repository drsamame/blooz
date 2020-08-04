<template>
  <div class="login">
    <div class="content">
      <div class="form">
        <h2>Ingresa a tu cuenta</h2>
        <ValidationObserver tag="form" ref="observer" v-slot="{ passes }">
          <BInputWithValidation
            :rules="{ required: true, alpha_dash: true }"
            type="text"
            name="user"
            label="Usuario"
            placeholder="Ingresa tu usuario"
            v-model="model.user"
          />
          <BInputWithValidation
            :rules="{ required: true, alpha_dash: true }"
            type="password"
            name="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            v-model="model.password"
          />
          <nuxt-link class="recover" to="/recuperar-contraseña">¿Has olvidado tu contraseña?</nuxt-link>
          <a @click="passes(submit)" class="btn primary">Ingresar</a>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BInputWithValidation from "@/components/inputs/input";

export default {
  name: "HomePage",
  layout: "layout-login",
  components: { BInputWithValidation },
  data() {
    return {
      model: {},
      methods: {
        submit() {
          console.log("Form submitted yay!");
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .field {
  margin-bottom: 14px;
  display: block;
  position: relative;
  .label {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #adb5bd;
  }
}
.login {
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  .content {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 760px;
    flex-direction: column;
    max-width: 280px;
    .form {
      padding: 28px 32px;
      border-radius: 8px;
      background-color: #fff;
      .recover {
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 24px;
        display: block;
        text-align: center;
        color: var(--color-primary);
      }
      h2 {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: var(--color-primary);
        margin-bottom: 32px;
      }
      .btn{
          max-width: 100px;
          margin: 0 auto;
          display: flex;
      }
    }
  }
}
</style>
