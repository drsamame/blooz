<template>
  <section id="banner" class="banner">
    <div class="container">
      <div class="columns">
        <div class="column is-5 break-tablet">
          <article class="card">
            <img src="~assets/images/logo-empresa.svg" alt />
            <h3 class="title">Conviértete en repartidor Blooz</h3>
            <p
              class="text"
            >Blooz continua su crecimiento y está buscando aumentar su red de repartidores.</p>
            <nuxt-link class="btn primary" to="/postular-repartidor">Quiero postular</nuxt-link>
          </article>
        </div>
        <div class="column is-7 hide-tablet">
          <div class="content-image image">
            <img src="https://via.placeholder.com/478x405" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#banner {
  padding-top: 90px;
  background-color: var(--color-driver);
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  @include tablet {
    align-items: center;
    min-height: 580px;
  }
  .container {
    max-width: 980px;
    padding: 0 20px;
  }
}
.card {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 70px;
  max-width: 300px;
  padding: 28px;
  box-shadow: none;
  @include tablet {
    margin: 0 auto;
  }
  img {
    width: 45px;
    margin-bottom: 14px;
  }
  .title {
    font-weight: bold;
    font-size: 22px;
    margin-top: 0;
    line-height: 27px;
    color: var(--color-primary);
    max-width: 228px;
    margin-bottom: 18px;
  }
  .text {
    color: #2b2b2b;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
  }
  .btn {
    max-width: 150px;
    margin: 32px auto 4px;
  }
}
.content-image {
  position: absolute;
  right: 20px;
  bottom: 0;
  @include tablet {
    position: relative;
    padding-bottom: 30px;
  }
  img {
    float: right;
    width: 100%;
    @include tablet {
      display: none;
    }
  }
}
.break-tablet {
  @include tablet {
    width: 100%;
  }
}
.hide-tablet {
  @include tablet {
    display: none;
  }
}
</style>
<script>
export default {
  name: "BannerDriver",
};
</script>
