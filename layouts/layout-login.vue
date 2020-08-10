<template>
  <div>
    <header class="header">
      <div class="container">
        <b-navbar>
          <template slot="brand">
            <div class="logo">
              <b-navbar-item tag="router-link" to="/">
                <img class="isotipe" src="~assets/images/isotipe-white.svg" alt />
                <img src="~assets/images/blooz-white.svg" alt />
              </b-navbar-item>
            </div>
          </template>
          <template slot="start">
            <b-navbar-item href="#">Quiero postular</b-navbar-item>
          </template>
          <template slot="end">
            <p class="call">
              ¿No tienes una cuenta? &nbsp;
              <b>¡Postula!</b>
            </p>
            <b-navbar-dropdown label="Quiero postular">
              <nuxt-link class="navbar-item" to="/postular-negocio">
                <img src="~assets/images/logo-empresa.svg" alt />Como empresa
              </nuxt-link>
              <nuxt-link class="navbar-item" to="/postular-repartidor">
                <img src="~assets/images/logo-repartidor.svg" alt />Como repartidor
              </nuxt-link>
            </b-navbar-dropdown>
          </template>
        </b-navbar>
      </div>
    </header>
    <nuxt />
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
  background-color: var(--color-primary);
  min-height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;

  .logo {
    align-items: center;
    display: flex;
    a {
      align-items: center;
      padding: 0.2rem 0.75rem;
      display: flex;
      border-right: 1px solid var(--color-primary);
      .isotipe {
        margin-right: 16px;
      }
    }
  }

  .navbar {
    background-color: transparent;
  }
  /deep/ .navbar-menu {
    .navbar-start {
      margin-left: 0px;
      @include tablet {
        margin-left: 0;
      }
      a {
        color: #fff;
        font-size: 12px;
        line-height: 15px;
        font-weight: normal;
        padding: 0 0 0 30px;
        &:hover {
          background-color: transparent;
        }
        @include tablet {
          margin: 25px 0 25px;
          font-size: 13px;
        }
      }
    }
    /deep/ .navbar-end {
      .call {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 12px;
        margin-right: 15px;
      }
      .navbar-item {
        &.has-dropdown {
          padding: 0.5rem 0.75rem;
          .navbar-link {
            border: 1px solid #fff;
          }
        }
        /deep/ .navbar-link {
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
            right: 18px;
            border-color: #ffffff;
            background-image: url(~assets/images/arrow-down.svg);
          }
          @include tablet {
            font-size: 14px;
            width: 200px;
            max-width: initial;
            display: inline-flex;
            height: 40px;
            padding: 10px 30px 0;
          }
        }
        /deep/ .navbar-dropdown {
          padding: 0.5rem 0.75rem;
          background: #ffffff;
          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.16);
          border-radius: 8px;
          border-top: none;
          margin-top: 4px;
          overflow: hidden;
          padding: 0;
          @include tablet {
            border: none;
            box-shadow: none;
          }
          .navbar-item {
            padding-left: 25px;
            padding-right: 25px;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: var(--color-primary);
            height: 34px;
            @include tablet {
              height: 40px;
            }
            &:first-child {
              border-bottom: 1px solid #dee2e6;
              @include tablet {
                border: none;
              }
            }
            img {
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
}
.header {
  border-bottom: none;
  .logo {
    padding: 0.5rem 0.75rem;
    a {
      padding: 0 30px 0 0;
      border-right: 1px solid #fff;
    }
  }
}
</style>
