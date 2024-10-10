/**
 * @copyright MSylla 2024
 * @author MSylla <mouhamedsyllla60@gmail.com>
 */

"use strict";

/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn =
    document.querySelector("[data-theme-btn]");

const /** {NodeElement} */ $HTML = document.documentElement;

let /** {boolean | string} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

/* 
  Switching the content of the same area on three different button clicks by making that content active or not.
  We first made one content active  by adding a class ".active" in it(so it is the last activate content).
  Then we listen to a click event on all three buttons. 
  If it happens we deactivate the first one and activate the clicked one by addingin it a ".active" class(button and content are linked by their data attribute values so if we know the cliced button we can know the corresponding content). 
  Finally we turn that acitve content the last active one.

  We do the same for the button styling too.
*/

const /** NodeElement */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** NodeElement */ [lastActiveTab] =
    document.querySelectorAll("[data-tab-content]");
let /** NodeElement */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    let $tabContent = document.querySelector(
      `[data-tab-content=${this.dataset.tabBtn}]`
    );

    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});


/* Alert for comming soon projects */

const /* NodeElement */ $commingSoonProjects = document.querySelectorAll(".comming-soon");

$commingSoonProjects.forEach(project => {
  project.addEventListener("click", () => {
    window.alert("Ce projet sera bientôt disponible sur mon Github.");
  })
})