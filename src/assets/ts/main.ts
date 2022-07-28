//#region ==> show menu

const toggle = document.querySelector<HTMLDivElement>("[data-toggle]")!;
const nav = document.querySelector<HTMLElement>("[data-nav-list]")!;

const showMenu = () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("menu__list--show");
};

if (toggle && nav) {
  toggle.addEventListener("click", showMenu);
  nav.addEventListener("click", showMenu);
}

//#endregion

export {};
