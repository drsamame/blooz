export { default as BannerClient } from '../../components/public/bannerClient.vue'
export { default as Header } from '../../components/public/header.vue'
export { default as HowWorks } from '../../components/public/howWorks.vue'
export { default as OurClients } from '../../components/public/ourClients.vue'
export { default as WhyChoose } from '../../components/public/whyChoose.vue'

export const LazyBannerClient = import('../../components/public/bannerClient.vue' /* webpackChunkName: "components/public/bannerClient'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/public/header.vue' /* webpackChunkName: "components/public/header'}" */).then(c => c.default || c)
export const LazyHowWorks = import('../../components/public/howWorks.vue' /* webpackChunkName: "components/public/howWorks'}" */).then(c => c.default || c)
export const LazyOurClients = import('../../components/public/ourClients.vue' /* webpackChunkName: "components/public/ourClients'}" */).then(c => c.default || c)
export const LazyWhyChoose = import('../../components/public/whyChoose.vue' /* webpackChunkName: "components/public/whyChoose'}" */).then(c => c.default || c)
