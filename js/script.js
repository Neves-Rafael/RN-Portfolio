const body = document.body,
  themeToggle = document.querySelectorAll(".theme-toggle"),
  lightMode = document.querySelector(".light-mode-icon"),
  DarkMode = document.querySelector(".dark-mode-icon");

//adicionar o evento de clique para alternar o tema
themeToggle.forEach((button) => {
  button.addEventListener("click", toggleDarkTheme);
});

//função para alternar entre os temas
function toggleDarkTheme() {
  body.classList.toggle("dark");

  //salvar o estado do tema no armazenamento local(localstorage)
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-theme", "true");
    DarkMode.style.display = "block";
    lightMode.style.display = "none";
    body.classList.add("bg-fundo");
    body.classList.remove("bg-white");
  } else {
    localStorage.removeItem("dark-theme");
    DarkMode.style.display = "none";
    lightMode.style.display = "block";
    body.classList.add("bg-white");
    body.classList.remove("bg-fundo");
  }
}

//verificar se o tema escuro está ativado no carregamento da página
if (localStorage.getItem("dark-theme")) {
  body.classList.add("dark");
  DarkMode.style.display = "block";
  lightMode.style.display = "none";
  body.classList.add("bg-fundo");
  body.classList.remove("bg-white");
} else {
  DarkMode.style.display = "none";
  lightMode.style.display = "block";
  body.classList.add("bg-white");
  body.classList.remove("bg-fundo");
}

//dropdown seleção idioma
const buttonIdioma = document.querySelector(".js-select"),
  dropdown = document.querySelector(".js-menu");

buttonIdioma.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");

  document.addEventListener("click", (event) => {
    if (
      !dropdown.contains(event.target) &&
      !buttonIdioma.contains(event.target)
    ) {
      dropdown.classList.add("hidden");
    }
  });
});

//selecionar idioma da pagina / saiba mais

const portuguese = document.getElementById("portuguese"),
  english = document.getElementById("english"),
  spanish = document.getElementById("spanish");

portuguese.addEventListener("click", () => {
  window.location.href = "./index.html";
});

english.addEventListener("click", () => {
  window.location.href = "./en.html";
});

//dropdown do menu(mediaQuery)
const menuButton = document.getElementById("button-menu"),
  header = document.getElementById("header");

menuButton.addEventListener("click", () => {
  header.classList.toggle("hidden");
});

//fechar o dropdown
const closeHeader = document.getElementById("close-header");
closeHeader.addEventListener("click", () => {
  header.classList.add("hidden");
});
// Feche o dropdown se o usuário clicar fora dele
window.addEventListener("click", function (event) {
  if (!menuButton.contains(event.target) && !header.contains(event.target)) {
    header.classList.add("hidden");
  }
});

//rolar até a seção desejada
//seleção dos botões
const projetos = document.getElementById("hProject"),
  habilidades = document.getElementById("hSkills"),
  contato = document.getElementById("hContact"),
  logo = document.getElementById("logo-header"),
  footerLogo = document.getElementById("logo-footer"),
  gmailRedirect = document.getElementById("btnGmail");
//seleção da seção de destino
(homePage = document.getElementById("homePage")),
  (firstSection = document.getElementById("firstSection")),
  (secondSection = document.getElementById("secondSection")),
  (thirdSection = document.getElementById("thirdSection"));

projetos.addEventListener("click", () => {
  firstSection.scrollIntoView({ behavior: "smooth" });
});

habilidades.addEventListener("click", () => {
  secondSection.scrollIntoView({ behavior: "smooth" });
});

contato.addEventListener("click", () => {
  thirdSection.scrollIntoView({ behavior: "smooth" });
});

logo.addEventListener("click", () => {
  homePage.scrollIntoView({ behavior: "smooth" });
});

footerLogo.addEventListener("click", () => {
  homePage.scrollIntoView({ behavior: "smooth" });
});

gmailRedirect.addEventListener("click", () => {
  thirdSection.scrollIntoView({ behavior: "smooth" });
});

//SCROLL REVEAL

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".sr-html", {
  delay: 250,
  origin: "left",
  easing: "ease-in",
});

ScrollReveal().reveal(".sr-css", {
  delay: 500,
  origin: "right",
  easing: "ease-in",
});

ScrollReveal().reveal(".sr-js", {
  delay: 500,
  origin: "left",
  easing: "ease-in",
});

ScrollReveal().reveal(".sr-tail", {
  delay: 500,
  origin: "right",
  easing: "ease-in",
});

ScrollReveal().reveal(".sr-react", {
  delay: 500,
  origin: "left",
  easing: "ease-in",
});

ScrollReveal().reveal(".sr-figma", {
  delay: 500,
  origin: "right",
  easing: "ease-in",
});
