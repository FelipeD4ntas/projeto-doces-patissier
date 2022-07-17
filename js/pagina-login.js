const btnSeInscrever = document.querySelectorAll('[data-js="botao-se-inscrever"]');
const btnLogin = document.querySelectorAll('[data-js="botao-login"]');
const btnEsqueceuSenha = document.querySelector('[data-js="btn-esqueceu-senha"]');
const btnCancelar = document.querySelector('[data-js="botato-cancelar"]');
const boxFormSeInscrever = document.querySelector('[data-js="box-form-inscricao"]');
const boxFormLogin = document.querySelector('[data-js="box-form-login"]');
const boxPrincipal = document.querySelector('[data-js="box-principal"]');
const boxRecuperarSenha = document.querySelector('[data-js="box-recuperar-senha"]');
const formInscricao = document.querySelector('[data-js="form-se-inscrever"]');
const formLogin = document.querySelector('[data-js="form-login"]');
const formRecuperarSenha = document.querySelector('[data-js="form-recuperar-senha"]');
const linkLogin = document.querySelector('[data-js="link-login"]');


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

function clicouRecuperarSenha() {
  index = 1
  index += 3
 
  setTimeout(() => {
    switch (index) {
      case 4: 
        boxRecuperarSenha.style.top = '0%';
    }
  }, 500);
};

function clicouBtnCancelar() {
  index = 1
 
  setTimeout(() => {
    switch (index) {
      case 1: 
       boxRecuperarSenha.style.top = '100%';
    }
  }, 500);
}

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
        alert(`Conta criada com sucesso.`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
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

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          
        } else {
          console.log('Usuario deslogado')
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
        alert('Usuário não encontrado.');
      };
      if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
        alert('Senha errada!');
      };
      if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
        alert('Email inválido');
      };
      if (errorMessage === 'Firebase: Error (auth/internal-error).') {
        alert('Senha em branco.')
      }
    });
}

function recuperSenha(event) {
  event.preventDefault();
  
  const auth = getAuth();
  const email = emailRecuperarSenha.value;
  
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Email de redefinição de senha enviado. (verifique a caixa de spam).');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
        alert(errorMessage)
    });
};

btnSeInscrever.forEach(btn => {
  btn.addEventListener('click', clicouBtnInscricao);
});
btnLogin.forEach(btn => {
  btn.addEventListener('click', clicouBtnLogin);
});
btnEsqueceuSenha.addEventListener('click', clicouRecuperarSenha);
btnCancelar.addEventListener('click', clicouBtnCancelar);
formInscricao.addEventListener('submit', seIncrever);
formLogin.addEventListener('submit', logar)
formRecuperarSenha.addEventListener('submit', recuperSenha);