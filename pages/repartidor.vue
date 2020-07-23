<template>
  <div class="home">
    <Banner />
    <Rates />
    <BePart />
    <ReadyFor />
  </div>
</template>
<script>
import Banner from "~/components/public/bannerDriver";
import Rates from "~/components/public/rates";
import BePart from "~/components/public/bePart";
import ReadyFor from "~/components/public/readyFor";

export default {
  name: "HomePage",
  components: {
    Banner,
    Rates,
    BePart,
    ReadyFor,
  },
};
</script>

<style lang="scss" scoped>
</style>
