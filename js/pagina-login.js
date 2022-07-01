const btnSeInscrever = document.querySelectorAll('[data-js="botao-se-inscrever"]');
const btnLogin = document.querySelectorAll('[data-js="botao-login"]');
const boxFormSeInscrever = document.querySelector('[data-js="box-form-inscricao"]');
const boxFormLogin = document.querySelector('[data-js="box-form-login"]');
const boxPrincipal = document.querySelector('[data-js="box-principal"]');
const formInscricao = document.querySelector('[data-js="form-se-inscrever"]');
const formLogin = document.querySelector('[data-js="form-login"]');

let index = 1;

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCLRw6P1217lxAUOSx79SUKQZ3REyXdg_w',
  authDomain: 'doces-patissier.firebaseapp.com',
  projectId: 'doces-patissier',
  storageBucket: 'doces-patissier.appspot.com',
  messagingSenderId: '725465980940',
  appId: '1:725465980940:web:c6be38fa9e004da2714e29',
  measurementId: 'G-3F4Y9PQX4M'
};

const app = initializeApp(firebaseConfig);

function clicouBtnInscricao() {
  index = 1
  ++index
  
  setTimeout(() => {
    switch (index) {
      case 1: 
        boxPrincipal.style.right = '0%';
        break
      case 2: 
        boxFormLogin.style.left = '100%';
        boxFormSeInscrever.style.right = '0%';
        break
      case 3: 
        boxFormLogin.style.left = '0%';
        boxFormSeInscrever.style.right = '100%';
        break
    }
  }, 500);
};

function clicouBtnLogin() {
  index = 1
  index += 2
 
  setTimeout(() => {
    switch (index) {
      case 1: 
        boxPrincipal.style.right = '0%';
        break
      case 2: 
        boxFormLogin.style.left = '100%';
        boxFormSeInscrever.style.right = '0%';
        break
      case 3: 
        boxFormLogin.style.left = '0%';
        boxFormSeInscrever.style.right = '100%';
        break
    }
  }, 500);
};

function seIncrever(event) {
  event.preventDefault();

  const email = emailInscricao.value;
  const pattern =  /^[a-zA-Z0-9]{6,}$/;
  const senhaValida = pattern.test(senhaInscricao.value);

  if (senhaValida) {
    const password = senhaInscricao.value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
    return
  }
  
  alert('A senha deve ter no mínimo 6 caracteres.')
};

function logar(event) {
  event.preventDefault();
  const email = emailLogin.value;
  const password = senhaLogin.value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
        alert('Usuário não encontrado.');
      };
      if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
        alert('Senha errada!');
      };
      if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
        alert('Email inválido');
      };
    });
}

btnSeInscrever.forEach(btn => {
  btn.addEventListener('click', clicouBtnInscricao);
});

btnLogin.forEach(btn => {
  btn.addEventListener('click', clicouBtnLogin);
})

formInscricao.addEventListener('submit', seIncrever);
formLogin.addEventListener('submit', logar)