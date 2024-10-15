import { defineConfig } from "vitepress";
// Constantes
import { nav } from "./constants/nav";
import { sidebar } from "./constants/sidebar";
import { socialLinks } from "./constants/socialLinks";

const siteTitle = "Sobrinho da Computação!";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: "O melhorzinho dos blogs de tecnologia!",
  themeConfig: {
    lastUpdatedText: "Última atualização em",
    logo: "/assets/LogoWiki.svg",
    siteTitle: siteTitle,
    nav,
    sidebar,
    socialLinks,
  },
  base: "/sobrinho-da-computacao/",
});
