// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import "@catppuccin/vitepress/theme/macchiato/mauve.css";
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default DefaultTheme;
// /** @type {import('vitepress').Theme} */
// export default {
//   extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//   },
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// }
