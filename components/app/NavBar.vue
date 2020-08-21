<template>
  <div class="nav-bar">
    <div class="start">
      <b-icon
        icon="menu"
        @click.native="setMenuVisibility(!is_menu_visible)"
        class="openMenu"
        size="is-small"
      ></b-icon>
    </div>
    <div class="profile end">
      <div class="menu" @click="isPerfilOpen = !isPerfilOpen">
        <img class="person" src="https://via.placeholder.com/24x24" alt />
        <p class="name">{{userInfo.fullname}}</p>
        <img class="profile__arrow" src="~/assets/images/select_arrow.svg" alt />
      </div>
      <div class="notify">
        <b-icon class="bell" icon="bell"></b-icon>
      </div>

      <transition name="fade">
        <template v-if="isPerfilOpen">
          <div class="profile__popup">
            <header>
              <div class="image">
                <img class="profile__image" src="https://via.placeholder.com/24x24" alt />
              </div>
              <p class="name">{{userInfo.fullname}}</p>
              <p class="email">{{userInfo.email}}</p>
            </header>
            <footer class="footer">
              <a class="endsesion" @click="logOut">Cerrar sesión</a>
            </footer>
          </div>
        </template>
      </transition>
      <transition name="fade">
        <div class="loading" v-if="isPerfilOpen" @click="isPerfilOpen = false"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isPerfilOpen: false,
    };
  },
  created() {
    window.addEventListener(
      "resize",
      function () {
        this.mediaQuery();
      }.bind(this)
    );
    this.mediaQuery();
  },
  computed: {
    ...mapState({
      userInfo: "user",
      is_menu_visible: "is_menu_visible",
    }),
  },
  methods: {
    ...mapActions(["logOut", "setMenuVisibility"]),
    mediaQuery() {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        this.setMenuVisibility(true);
      } else {
        this.setMenuVisibility(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  width: 150%;
  position: fixed;
  left: -230px;
  top: 0;
  z-index: 10;
  @include mobile {
    left: 0;
  }
}
.start {
  display: flex;
  align-items: center;
  .openMenu {
    color: var(--color-primary);
    cursor: pointer;
    font-size: 24px;
    line-height: 24px;
    i {
      &::before {
        font-size: 24px;
        height: 24px;
      }
    }
  }
}

.notify {
  margin-left: 30px;
  .bell {
    color: var(--color-primary);
    i {
      font-size: 2px;
      &::before {
        font-size: 24px;
      }
    }
  }
}
.menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  .person {
    border-radius: 50px;
    @include mobile {
      margin-right: 10px;
    }
  }
  .name {
    @include mobile {
      display: none;
    }
  }
}

.nav-bar {
  padding: 0 40px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  @include mobile {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.profile {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #fff;

  &__popup {
    display: flex;
    width: 220px;
    z-index: 11;
    position: absolute;
    right: 0;
    top: 38px;
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 0;
    flex-direction: column;

    header {
      border-bottom: 1px solid rgba(19, 19, 71, 0.1);
      padding: 12px 24px 10px;

      .image {
        display: block;
        text-align: center;
      }

      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #131347;
        margin-bottom: 3px;
        margin-top: 5px;
      }

      .email {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 8px;
        text-align: center;
        color: var(--color-primary);
      }

      a {
        color: var(--color-primary);
        font-size: 12px;
        text-align: center;
        display: block;
      }
    }

    .body {
      border-bottom: 1px solid rgba(19, 19, 71, 0.1);

      .title {
        color: rgba(19, 19, 71, 0.8);
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      ul {
        padding: 0 16px 16px;

        li {
          color: var(--color-primary);
          font-size: 12px;
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;

          &:before {
            content: "";
            width: 6px;
            height: 6px;
            background-color: rgba(19, 19, 71, 0.1);
            position: absolute;
            left: 0;
            border-radius: 50px;
            top: 6px;
          }
        }
      }
    }

    .footer {
      text-align: center;
      font-size: 12px;
      color: var(--text-color-new);
      display: flex;
      justify-content: center;
      padding: auto;
      align-items: center;
      height: 35px;
      padding: 0;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      a {
        cursor: pointer;
      }
    }
  }

  &__image {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    text-align: center;
    margin: 9px auto 14px;
  }

  p {
    font-size: 14px;
    line-height: 14px;
    color: var(--color-primary);
    margin: 0 16px;
  }
}
</style>
