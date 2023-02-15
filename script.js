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

const botao = document.querySelector('#botao');

botao.addEventListener('click', login);
