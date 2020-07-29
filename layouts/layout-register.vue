<template>
  <div>
    <!--<Header />-->
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
