<template>
  <header>
    <div class="container">
      <b-navbar>
        <template slot="brand">
          <div class="logo">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img class="isotipe" src="~assets/images/isotipe.svg" alt />
              <img src="~assets/images/blooz.svg" alt />
            </b-navbar-item>
          </div>
        </template>
        <template slot="start">
          <b-navbar-item class="active" href="#">Quiero ser repartidor</b-navbar-item>
          <b-navbar-item href="#">Quiénes somos</b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <nuxt-link to="/login" class="btn trans">Iniciar sesión</nuxt-link>
          </b-navbar-item>
          <b-navbar-dropdown label="Quiero postular">
            <b-navbar-item href="#">
              <img src="~assets/images/logo-empresa.svg" alt />Como empresa
            </b-navbar-item>
            <b-navbar-item href="#">
              <img src="~assets/images/logo-repartidor.svg" alt />Como repartidor
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>
      </b-navbar>
    </div>
  </header>
</template>
<style lang="scss">
header {
  min-height: 70px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .isotipe {
      margin-right: 16px;
    }
  }
  .navbar-menu {
    .navbar-start {
      margin-left: 60px;
      a {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        &:hover {
          background-color: transparent;
        }
        &.active {
          &:after {
            content: "";
            display: block;
            background-color: var(--color-primary);
            position: absolute;
            width: 20px;
            height: 3px;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .navbar-end {
      .navbar-item {
        &.has-dropdown {
          padding: 0.5rem 0.75rem;
          .navbar-link {
            background-color: var(--color-primary);
            background: #205071;
            border-radius: 18.5px;
            height: 36px;
            color: #fff;
            padding: 0 25px;
            width: 170px;
            font-size: 12px;
            font-weight: bold;
            &:after {
              width: 18px;
              height: 18px;
              background-repeat: no-repeat;
              transform: rotate(0deg);
              border: none;
              background-position: center center;
              top: 14px;
              border-color: #ffffff;
              background-image: url(~assets/images/arrow-down.svg);
            }
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "Header"
};
</script>
