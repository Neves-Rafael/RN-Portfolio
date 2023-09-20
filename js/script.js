const body = document.body,
      themeToggle = document.querySelectorAll('.theme-toggle'),
      lightMode = document.querySelector('.light-mode-icon'),
      DarkMode = document.querySelector('.dark-mode-icon');

//adicionar o evento de clique para alternar o tema
themeToggle.forEach(button => {
  button.addEventListener('click', toggleDarkTheme);
});

//função para alternar entre os temas
function toggleDarkTheme() {
  body.classList.toggle('dark');

  //salvar o estado do tema no armazenamento local(localstorage)
  if(body.classList.contains('dark')){
    localStorage.setItem('dark-theme','true');
    DarkMode.style.display = 'block';
    lightMode.style.display = 'none';
  } else {
    localStorage.removeItem('dark-theme');
    DarkMode.style.display = 'none';
    lightMode.style.display = 'block';
  }
}

//verificar se o tema escuro está ativado no carregamento da página
if(localStorage.getItem('dark-theme')) {
  body.classList.add('dark');
  DarkMode.style.display = 'block';
  lightMode.style.display = 'none';
} else {
  DarkMode.style.display = 'none';
  lightMode.style.display = 'block';
}



//dropdown seleção idioma
const buttonIdioma = document.querySelector('.js-select'),
      dropdown = document.querySelector('.js-menu');

buttonIdioma.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !buttonIdioma.contains(event.target)) {
        dropdown.classList.add('hidden');
      }
    });  
});

//selecionar idioma da pagina / saiba mais

const portuguese = document.getElementById('portuguese'),
      english = document.getElementById('english'),
      spanish = document.getElementById('spanish'),
      saibaMais = document.getElementById('saibaMais')

portuguese.addEventListener('click', () => {
  window.location.href = ('./index.html')
});

english.addEventListener('click', () => {
  window.location.href = ('./en-us.html')
});

spanish.addEventListener('click', () => {
  window.location.href = ('./es.html')
});

saibaMais.addEventListener('click', () => {
  window.location.href = ('./saiba-mais.html')
});




//dropdown do menu(mediaQuery)
const menuButton = document.getElementById('button-menu'),
      header = document.getElementById('header');

  menuButton.addEventListener('click', () => {
    header.classList.toggle("hidden");
});

//fechar o dropdown
const closeHeader = document.getElementById('close-header');
  closeHeader.addEventListener('click', () => {
    header.classList.add("hidden")
})
// Feche o dropdown se o usuário clicar fora dele
window.addEventListener("click", function(event) {
  if (!menuButton.contains(event.target) && !header.contains(event.target)) {
    header.classList.add("hidden");
  }
});


//rolar até a seção desejada
// const document.getElementById(''),
//       document.getElementById(''),
//       document.getElementById(''),
//       document.getElementById(''),
//       document.getElementById(''),
//       document.getElementById(''),
//       document.getElementById('');