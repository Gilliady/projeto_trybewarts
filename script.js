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
    botaoEnviar.style.backgroundColor = 'rgb(89, 0, 132)';
  }
}

checkbox();
check.addEventListener('click', checkbox);

const textarea = document.querySelector('textarea');

function counter() {
  const caracteresUsados = textarea.value.length;
  const caracteresDisponiveis = 500 - caracteresUsados;
  document.querySelector('#counter').innerHTML = caracteresDisponiveis;
}

textarea.addEventListener('input', counter);

const submitBtn = document.querySelector('#submit-btn');

const getSelectedRadioInput = (inputList) => {
  let familySelected;
  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].checked) {
      familySelected = inputList[index].value;
    }
  }
  return familySelected;
};

const getSelectedCheckBoxes = (checkBoxList) => {
  const checkedList = [];
  for (let index = 0; index < checkBoxList.length; index += 1) {
    if (checkBoxList[index].firstChild.checked) {
      checkedList.push(checkBoxList[index].firstChild.value);
    }
  }
  return checkedList;
};

const createSubjectsMensage = (subjectsList) => {
  let mensage = `${subjectsList[0]}, `;
  for (let index = 1; index < subjectsList.length; index += 1) {
    mensage += subjectsList[index];
    if (index !== subjectsList.length - 1) {
      mensage += ', ';
    }
  }
  return mensage;
};

const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houseLabel = document.querySelector('#house');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const fullNameInput = `${name.value} ${lastName.value}`;
  const familyInput = document.getElementsByName('family');
  const familySelected = getSelectedRadioInput(familyInput);
  const materias = document.querySelectorAll('.techOptions');
  const form = document.querySelector('#evaluation-form');
  form.style.display = 'none';
  const formData = form.parentElement.appendChild(document.createElement('form'));
  formData.id = 'form-data';
  formData.innerHTML = `<p>Nome: ${fullNameInput}</p>
  <p>Email: ${emailInput.value}</p>
  <p>Casa: ${houseLabel.value}</p>
  <p>Família: ${familySelected}</p>
  <p>Matérias: ${createSubjectsMensage(getSelectedCheckBoxes(materias))}</p>
  <p>Avaliação: ${getSelectedRadioInput(document.querySelectorAll('.rate'))}</p>
  <p>Observações: ${document.querySelector('textarea').value}</p></form>`;
});
