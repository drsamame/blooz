<template>
  <div class="application">
    <div class="application--wrap">
      <Header class="header" :class="{'open':isMenuVisible}"/>
      <Navigation :open="isMenuVisible" />
      <main class="main" :class="{'open':isMenuVisible}">
        <div class="main__wrap">
          <div class="container">
            <nuxt />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/app/Header";
import Navigation from "@/components/app/Navigation";

export default {
  name: "LayoutApp",
  middleware: "authenticated",
  components: {
    Header,
    Navigation,
  },
  data() {
    return {
    };
  },
  computed: mapState({
    isMenuVisible: (state) => state.is_menu_visible,
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: all; 
  &.open {
    margin: 0 0 0 230px;
  }
}

.application {
  display: flex;

  &--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    position: relative;
  }
}

.main {
  padding: 64px 0px 0px 0;
  display: flex;
  background-color: #F8F8FA;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.open {
    padding: 100px 0px 0px 230px;
  }

  &__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;

    .container {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      width: 100%;
      height: 100%;
      padding: 0;
      margin-right: auto;
      margin-left: auto;
      @media (min-width: 1264px) {
        .container {
          max-width: 1185px;
        }
      }
      @media (min-width: 960px) {
        .container {
          max-width: 900px;
        }
      }
    }
  }
}
</style>
