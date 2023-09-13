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



//dropdown
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