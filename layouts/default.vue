<template>
  <div>
    <Header />
    <transition name="fade">
      <nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/public/header";
import Footer from "~/components/public/footer";
export default {
  name: "layout",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
