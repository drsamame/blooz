<template>
  <div class="register">
    <div class="content">
      <div class="intro">
        <img class="logo" src="~assets/images/logo-repartidor.svg" alt />
        <div class="text">
          <h3>Gracias por postular</h3>
          <h6>¡Tus datos han sido enviados!</h6>
          <p>Te enviaremos un <b>correo y sms de validación</b> para informarte sobre los siguientes pasos de tu postulación</p>
          <nuxt-link to="/" class="btn primary">Entendido</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";

export default {
  layout: "layout-postulate",
  name: "postulaNegocio",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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
  flex-direction: column;
  position: relative;
}
.content {
  max-width: 460px;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0 25px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.intro {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 60px;
  .logo {
    width: 45px;
    height: 45px;
    margin-bottom: 24px;
  }
  .text {
    text-align: center;
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      color: var(--color-driver);
      margin-bottom: 8px;
    }
    h6 {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-primary);
    }
    p {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #2b2b2b;
      margin-bottom: 0;
    }
    .btn{
        margin-top: 32px;
    }
  }
}
</style>
