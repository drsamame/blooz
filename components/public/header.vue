<template>
  <header class="header" :class="navColor">
    <div class="container">
      <b-navbar>
        <template slot="brand">
          <div class="logo" v-show="!navColor.transparent">
            <b-navbar-item tag="router-link" to="/">
              <img class="isotipe" src="~assets/images/isotipe.svg" alt />
              <img src="~assets/images/blooz.svg" alt />
            </b-navbar-item>
          </div>
          <div class="logo white" v-show="navColor.transparent">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img class="isotipe" src="~assets/images/isotipe-white.svg" alt />
              <img src="~assets/images/blooz-white.svg" alt />
            </b-navbar-item>
          </div>
        </template>
        <template slot="start">
          <nuxt-link to="/repartidor" :class="{active: $route.name==='repartidor'}" class="navbar-item" >
            Quiero ser repartidor
          </nuxt-link>
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
    <div class="up" @click="scrollTop">
      <img src="~assets/images/arrow-up.svg" alt />
    </div>
  </header>
</template>
<style lang="scss">
.header {
  min-height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
  @include tablet {
    min-height: auto;
  }
  &.transparent {
    background-color: transparent;
    border-bottom: none;
    .navbar {
      background-color: transparent;
    }
    .navbar-brand {
      .burger {
        span {
          background-color: #fff;
        }
      }
    }
    .navbar-menu {
      @include tablet {
        padding-left: 20px;
        padding-right: 20px;
      }
      .navbar-start {
        .navbar-item {
          color: #fff;
          &:focus{
            background-color: transparent;
          }
          @include tablet {
            color: var(--color-primary);
          }
          &:after {
            background-color: #fff;
            @include tablet {
              background-color: var(--color-primary);
            }
          }
        }
      }
      .navbar-end {
        .navbar-item {
          .btn {
            border-color: #fff;
            color: #fff;
            @include tablet {
              border-color: var(--color-primary);
              color: var(--color-primary);
            }
          }
          &.has-dropdown {
            .navbar-link {
              &:after {
                border-color: var(--color-primary);
              }
            }
          }
        }
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .isotipe {
      margin-right: 16px;
    }
    &.white {
    }
  }

  .navbar-brand {
    @include tablet {
      padding: 0 20px;
      height: 70px;
    }
  }

  .navbar-burger {
    &:hover{
      background-color: transparent;
    }
    @include tablet {
      width: 50px;
      height: 70px;
    }
    span {
      height: 3px;
      width: 18px;
      border-radius: 5px;
      background-color: var(--color-primary);
    }
  }
  .navbar-menu {
    .navbar-start {
      margin-left: 60px;
      @include tablet {
        margin-left: 0;
      }
      a {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        padding: 0 15px;
        &:hover {
          background-color: transparent;
        }
        @include tablet {
          margin: 25px 0 25px;
          font-size: 13px;
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
            @include tablet {
              left: 24px;
              top: 20px;
              display: none;
            }
          }
        }
      }
    }
    .navbar-end {
      @include tablet {
        margin-top: -10px;
      }
      .navbar-item {
        .btn {
          @include tablet {
            font-size: 14px;
            width: auto;
            max-width: initial;
            display: inline-flex;
            height: 40px;
            padding: 0 30px;
          }
        }
        &.has-dropdown {
          padding: 0.5rem 0.75rem;
          @include tablet {
            margin-top: 5px;
          }
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
              right: 20px;
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
          .navbar-dropdown {
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
}
.up {
  background: #ffffff;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.169772);
  width: 43px;
  height: 43px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 32px;
  right: 47px;
}
</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
      h: undefined,
    };
  },
  mounted() {
    this.h = document.getElementById("banner").clientHeight;
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    navColor() {
      return {
        transparent: this.scrollPosition < this.h - 70,
      };
    },
  },
};
</script>
