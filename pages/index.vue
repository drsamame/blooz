<template>
  <div class="home">
    <Banner />
    <HowWorks />
    <WhyChoose />
    <OurClients />
  </div>
</template>
<script>
import Banner from "~/components/public/bannerBusiness";
import HowWorks from "~/components/public/howWorks";
import WhyChoose from "~/components/public/whyChoose";
import OurClients from "~/components/public/ourClients";

export default {
  name: "HomePage",
  components: {
    Banner,
    HowWorks,
    WhyChoose,
    OurClients,
  },
};
</script>

<style lang="scss" scoped>
</style>
