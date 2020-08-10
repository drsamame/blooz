<template>
  <div class="recuperar">
    <div class="content">
      <form class="form">
        <h2>Nueva contraseña</h2>
        <p>Ingresa una nueva contraseña para tu cuenta</p>
        <ValidationObserver ref="form" v-slot="{ passes }">
          <BInputWithValidation
            class="content-field"
            vid="password"
            :rules="{ required: true, alpha_dash: true, min: 7, max:24 }"
            name="contraseña"
            type="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            v-model="model.password"
          />
          <BInputWithValidation
            class="content-field"
            rules="required|confirmed:password"
            type="password"
            name="Repetir contraseña"
            label="Repetir contraseña"
            placeholder="Reingresa tu contraseña"
            v-model="model.password2"
          />

          <b-button
            class="btn primary"
            @click.native.prevent="passes(submit)"
            :loading="isLoading"
          >Enviar</b-button>
        </ValidationObserver>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/deep/ .field {
  margin-bottom: 24px;
  display: block;
  position: relative;
  .label {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #adb5bd;
  }
}
.recuperar {
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
    max-width: 320px;

    .form {
      padding: 28px 32px;
      width: 100%;
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
      }
      p {
        font-size: 12px;
        margin-bottom: 32px;
        text-align: center;
      }
      .btn {
        max-width: 100px;
        margin: 0 auto;
        display: flex;
      }
    }
  }
}
</style>

<script>
import { ValidationObserver } from "vee-validate";
import BInputWithValidation from "@/components/inputs/input";
import { mapActions } from "vuex";
import * as Swal from "sweetalert2";
import $backend from "@/services/backend";
export default {
  name: "recuperar-cuenta",
  layout: "layout-login",
  components: { BInputWithValidation },
  data() {
    return {
      model: {
        token: this.$route.params.id,
      },
      isLoading: false,
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      try {
        const response = await $backend.resetPassword(this.model);
        this.isLoading = false;
        Swal.fire({
          icon: "success",
          title: "Contraseña actualizada",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn primary",
          },
          confirmButtonText: "Ingresar",
          html: `<p class="popup-content-text">Se ha actualizado su contraseña, puede ingresar con sus nuevos datos</p>`,
        }).then(resp =>{
            this.$router.push('/login')
        });
      } catch (err) {
        const errors = {};
        for (const item in err.response.data.input) {
          errors[item] = err.response.data.input[item].name;
        }
        this.$refs.form.setErrors(errors);
        this.isLoading = false;
      }
    },
  },
};
</script>
