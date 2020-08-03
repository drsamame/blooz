<template>
  <div>
    <header class="header">
      <div class="container">
        <b-navbar>
          <template slot="brand">
            <div class="logo">
              <b-navbar-item tag="router-link" to="/">
                <img class="isotipe" src="~assets/images/isotipe.svg" alt />
                <img src="~assets/images/blooz.svg" alt />
              </b-navbar-item>
            </div>
          </template>
          <template slot="start">
            <b-navbar-item href="#">Quiero postular</b-navbar-item>
          </template>
          <template slot="end">
            <div class="switcher" v-show="$route.name == 'postular-negocio' || $route.name == 'postular-repartidor'">
              <nuxt-link
                to="/postular-negocio"
                class="client"
                :class="{active : $route.name === 'postular-negocio'}"
              ></nuxt-link>
              <nuxt-link
                to="/postular-repartidor"
                class="driver"
                :class="{active : $route.name === 'postular-repartidor'}"
              ></nuxt-link>
            </div>
          </template>
        </b-navbar>
      </div>
    </header>
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Header from "~/components/public/header";
export default {
  name: "layoutRegister",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  .client {
    cursor: pointer;
    border: 1px solid #adb5bd;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 50px;
    height: 37px;
    &::after {
      content: "";
      position: relative;
      width: 18px;
      height: 18px;
      display: block;
      margin: 8px auto;
      background: #adb5bd;
      border-radius: 4px;
    }
    &.active {
      border-color: var(--color-client);
      background-color: #ffe0df;
      margin-right: -1px;
      z-index: 2;
      &::after {
        background-color: var(--color-client);
      }
    }
  }
  .driver {
    cursor: pointer;
    border: 1px solid #adb5bd;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50px;
    height: 37px;
    margin-left: -1px;
    padding-left: -1px;
    &::after {
      content: "";
      position: relative;
      width: 18px;
      height: 18px;
      display: block;
      margin: 8px auto;
      background: #adb5bd;
      border-radius: 4px;
    }
    &.active {
      border-color: var(--color-driver);
      background-color: #c5ecee;
      &::after {
        background-color: var(--color-driver);
      }
    }
  }
}
.header {
  /deep/ .navbar-menu {
    .navbar-start {
      margin-left: 0px;
      @include tablet {
        margin-left: 0;
      }
      a {
        color: var(--color-primary);
        font-size: 12px;
        line-height: 15px;
        font-weight: normal;
        padding: 0 15px;
        &:hover {
          background-color: transparent;
        }
        @include tablet {
          margin: 25px 0 25px;
          font-size: 13px;
        }
      }
    }
  }
}
.header {
  border-bottom: none;
  .logo {
    a {
      padding: 0.2rem 0.75rem;
      border-right: 1px solid var(--color-primary);
    }
  }
}
</style>
