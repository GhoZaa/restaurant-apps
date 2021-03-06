import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import swRegister from "./utils/sw-register";
import App from "./views/app";

const app = new App({
  button: document.querySelector("#nav-toggle"),
  drawer: document.querySelector("#nav-menu"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
