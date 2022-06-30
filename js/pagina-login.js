const btnSeInscrever = document.querySelector('[data-js="botao-se-inscrever"]');
const boxForm = document.querySelector('[data-js="box-form-inscricao"]');
const conteudoBtnSignup = document.querySelector('[data-js="cont-signup"]');
const loadingSignup = document.querySelector('[data-js="loading-signup"]');

function seIncrever() {
  conteudoBtnSignup.style.display = 'none';
  loadingSignup.style.display = 'block';
  setTimeout(() => {
    boxForm.style.left = '0';
  }, 1000);
};

btnSeInscrever.addEventListener('click', seIncrever);