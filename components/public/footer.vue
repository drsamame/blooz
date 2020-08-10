<template>
  <footer class="foot">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <p class="copy">2020 Blooz Todos los derechos reservados</p>
        </div>
        <div class="column is-6 is-vcentered">
          <div class="icons">
            <nuxt-link to="/">
              <b-icon icon="facebook" size="is-small"></b-icon>
            </nuxt-link>
            <nuxt-link to="/">
              <b-icon icon="instagram" size="is-small"></b-icon>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.foot {
  background-color: var(--color-primary);
  min-height: 60px;
  padding: 0 20px;
  color: #fff;
  display: flex;
  align-items: center;
  @include mobile {
    min-height: auto;
    height: auto;
    overflow: hidden;
    padding-bottom: 30px;
  }
}
.copy {
  font-size: 10px;
  line-height: 20px;
  color: #f8f8fa;
  @include mobile {
    text-align: center;
  }
}
.icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @include mobile {
    justify-content: center;
  }
  a {
    color: #fff;
    &:first-child {
      .icon {
        margin-left: 0;
      }
    }
  }
  .icon {
    margin-left: 18px;
    font-size: 20px;
  }
}
</style>
<script>
export default {
  name: "Footer",
};
</script>
