import { defineConfig } from "vitepress";
// Constantes
import { nav } from "./constants/nav";
import { sidebar } from "./constants/sidebar";
import { socialLinks } from "./constants/socialLinks";

const siteTitle = "Sobrinho da Computação!";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: "Meu blog pessoal de tecnologia!",
  themeConfig: {
    lastUpdatedText: "Última atualização em",
    logo: "/LogoWiki.svg",
    siteTitle: siteTitle,
    nav,
    sidebar,
    socialLinks,
    search: {
      provider: 'local'
    },
  },
  base: "/sobrinho-da-computacao/",
});