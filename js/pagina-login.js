const btnSeInscrever = document.querySelectorAll('[data-js="botao-se-inscrever"]');
const btnLogin = document.querySelectorAll('[data-js="botao-login"]');
const boxFormSeInscrever = document.querySelector('[data-js="box-form-inscricao"]');
const boxFormLogin = document.querySelector('[data-js="box-form-login"]');
const boxPrincipal = document.querySelector('[data-js="box-principal"]');
const conteudoBtnSignup = document.querySelectorAll('[data-js="cont-signup"]');
const conteudoBtnLogin = document.querySelectorAll('[data-js="cont-login"]');
const loadingSignup = document.querySelectorAll('[data-js="loading-signup"]');
const loadingLogin = document.querySelectorAll('[data-js="loading-login"]');

function seIncrever() {
  conteudoBtnSignup.forEach(cont => {
    cont.style.display = 'none';
  })
  loadingSignup.forEach(loading => {
    loading.style.display = 'block';
  })

  setTimeout(() => {
    boxFormSeInscrever.style.left = '0';
    boxFormLogin.style.right = '2000px';
    boxPrincipal.style.opacity = '0';
  }, 1000);
};

function logar() {
  conteudoBtnLogin.forEach(cont => {
      cont.style.display = 'none';
  });
  loadingLogin.forEach(loading => {
    loading.style.display = 'block';
  });

  setTimeout(() => {
    boxFormSeInscrever.style.left = '2000px';
    boxFormLogin.style.right = '0';
    boxPrincipal.style.opacity = '0';
  }, 1000);
}

btnSeInscrever.forEach(btn => {
  btn.addEventListener('click', seIncrever);
});

btnLogin.forEach(btn => {
  btn.addEventListener('click', logar);
})