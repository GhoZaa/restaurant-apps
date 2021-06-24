import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import '../styles/responsive.css';
import App from "./views/app";

const app = new App({
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main-content'),
});

// /*==================== SHOW MENU ====================*/
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId), 
//   nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show-menu");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll(".nav__link");
// const hero = document.querySelector(".hero");
// const main = document.querySelector("main");

// function linkAction() {
//   const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));
// hero.addEventListener("click", linkAction);
// main.addEventListener("click", linkAction);

/*==================== FETCH JSON DATA ====================*/
import("../DATA.json").then(({ default: jsonData }) => {
  const dataResto = jsonData["restaurants"];
  let dataList = "";
  dataResto.forEach(function (data) {
    dataList += `
      <div class="list__item">
          <img class="item__img" src="${data["pictureId"]}" alt="${data["name"]} image" title="${data["name"]}">
          <div class="item__content">
              <h1 class="item__title"><a href="#">${data["name"]}</a></h1>
              <p class="item__txt">
                  City : <span aria-label="restaurant city" class="item__city">${data["city"]}</span>
              </p>
              <p class="item__txt">
                  Rating : <span aria-label="restaurant rating" class="item__rating">${data["rating"]}</span>
              </p>
              <p class="item__description">${data["description"].slice(0,200)}...</p>
              <div class="more"><a href="">Selengkapnya</a></div>
          </div>
      </div>
      `;
  });
  document.querySelector("#list-item").innerHTML = dataList;
});