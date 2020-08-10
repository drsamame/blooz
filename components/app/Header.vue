<template>
  <header class="header">
    <div class="toolbar__content">
      <nav-bar />
    </div>
  </header>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: { NavBar },
  props: {
    open: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.navbar {
  flex: 1;
}

.header {
  height: 100px;
  z-index: 3;
  margin-top: 0;
  transform: translateY(0px);
  left: 0;
  background-color: var(--secondary-color-new);
  right: 0;
  position: fixed;
  top: 0;
}

.toolbar {
  &__content {
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 0;
  }
}
</style>
