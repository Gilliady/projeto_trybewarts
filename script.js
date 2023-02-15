function login() {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  console.log('entrei na função');

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const botaoEntrar = document.querySelector('#botao');

botaoEntrar.addEventListener('click', login);

const check = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');

function checkbox() {
  if (check.checked === false) {
    botaoEnviar.disabled = true;
    botaoEnviar.style.backgroundColor = 'gray';
  } else {
    botaoEnviar.disabled = false;
    botaoEnviar.style.backgroundColor = '#8526b4c9';
  }
}

checkbox();
check.addEventListener('click', checkbox);
