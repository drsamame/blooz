<template>
  <aside class="navigation" :class="{'hidden': !open}">
    <div class="content">
      <template>
        <div class="content-list">
          <nuxt-link class="logo" :to="{ path: '/' }" :class="{'open': open}">
            <img class="isotipe" src="~assets/images/isotipe.svg" alt />
            <img src="~assets/images/blooz.svg" alt />
          </nuxt-link>
          <ul class="list">
            <li>
              <nuxt-link to="/app/mis-pedidos">
                <img src="https://via.placeholder.com/24x24" alt />
                Mis pedidos
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/app/historial">
                <img src="https://via.placeholder.com/24x24" alt />Historial
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/app/mi-cuenta">
                <img src="https://via.placeholder.com/24x24" alt />Mi cuenta
              </nuxt-link>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navigation",
  props: {
    open: {
      type: Boolean,
    },
    list: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
}

.logo {
  width: 230px;
  text-align: left;
  display: flex;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: all;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  height: 100px;
  &.open {
    border-right: 1px solid #dee2e6;
  }
  img {
    width: 80px;
  }
  .isotipe {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
}
.content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  border-right: 1px solid #dee2e6;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 60px 0;
  .list {
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    box-shadow: none;

    li {
      text-decoration: none;
      list-style: none;
      border: none;
      a {
        height: 31px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        font-weight: 600;
        text-decoration: none;
        border: none;
        font-size: 14px;
        line-height: 15px;
        color: #a1a5a8;
        transition: 0.5s ease all;

        img {
          margin-right: 8px;
        }

        &:hover {
          color: var(--text-color-new);
        }
        &.nuxt-link-active {
          color: var(--primary-color-new);
          color: var(--color-primary);

          &:after {
            content: "";
            border-radius: 4px;
            width: 5px;
            height: 31px;
            position: absolute;
            right: 0;
            background-color: var(--color-primary);
          }
        }
      }
    }
  }

  .content-list {
    width: 100%;
    margin-bottom: 50px;

    .title {
      font-size: 14px;
      line-height: 15px;
      text-transform: uppercase;
      color: var(--text-color-secondary-new);
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  .dashboard {
    margin-bottom: 32px;
  }
}

.navigation {
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  left: 0;
  max-width: 100%;
  position: fixed;
  overflow: hidden;
  pointer-events: auto;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: transform, visibility, width;
  height: 100vh;
  background-color: #fff;
  top: 0;
  transform: translateX(0%);
  width: 230px;
  max-height: calc(100%);
  box-sizing: border-box;
  @include tablet {
    position: fixed;
    background-color: #fff;
    z-index: 5;
  }

  .copy {
    position: absolute;
    bottom: 24px;
    width: 100%;
    left: 0;
    text-align: center;
  }
}

.hidden {
  transform: translateX(-100%);
}
</style>
