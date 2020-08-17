<template>
  <div class="container-panel" @click.self="closeModalEdit">
    <transition name="transition">
      <div v-if="visible" class="panel-main" :style="'width: '+width">
        <div class="panel-close">
          <b-icon icon="close" size="is-small"></b-icon>
        </div>
        <div class="panel-body">
          <slot name="panel-body"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: "PanelLateral",
  props: {
    width: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    document.body.setAttribute("class", "overflow-hidden");
    this.togglePanel(true);
  },
  destroyed() {
    document.body.removeAttribute("class", "overflow-hidden");
  },
  methods: {
    togglePanel(value) {
      this.visible = value;
    },

    closeModalEdit() {
      if (this.visible) {
        this.togglePanel(false);
        setTimeout(() => {
          this.$emit("closePanel");
        }, 350);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-panel {
  position: fixed;
  background: #00000029;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  transition: linear;
  .panel-main {
    position: fixed;
    background: #f8f8fa;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 99;

    .panel-close {
      position: absolute;
      top: 0;
      left: -40px;
      background: #f8f8fa;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px 0 0 3px;
      //border-right: 1px solid #E7E7ED;
      /deep/ .mdi {
        &:before {
          font-size: 18px;
          color: var(--color-primary);
        }
      }
      cursor: pointer;
    }
    .panel-body {
      overflow: auto;
      height: 100%;
      padding: 24px 32px;
    }
  }
}

.transition-enter-active,
.transition-leave-active {
  transition: all 0.4s;
}
.transition-enter,
.transition-leave-to {
  transform: translateX(1599px);
}
</style>