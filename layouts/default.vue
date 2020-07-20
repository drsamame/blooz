<template>
  <div>
    <Header />
    <div class="content">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-start">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <p class="copy">2020 Blooz Todos los derechos reservados</p>
            </div>
            <div class="column is-6">
              <div class="icons">
                <b-icon icon="facebook" size="is-small"></b-icon>
                <b-icon icon="instagram" size="is-small"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/header' 
export default {
  name: "layout",
  components: {
    Header,
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" }
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>
