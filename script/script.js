const btnLogin = document.querySelector('#btn_login')
const input = document.querySelectorAll('.campoInput')

// Adicionar um ouvinte de eventos para cada campo de input
input.forEach(campos =>{
    campos.addEventListener('input', verificarInput)
});

// Função para verificar se os campos estão preenchidos
function verificarInput(){
    // variável para rastrear se os campos estão preenchidos
    let todosPreenchidos = true;

    // percorrendo os campos e verificando se estão prenchidos
    input.forEach(campos => {
        if(campos.value.trim() === '' || campos.validity.tooShort){
            todosPreenchidos = false
            return
        }
    });

    // habilitar e desabilitar o botão
    if(todosPreenchidos){
        btnLogin.removeAttribute('disabled')
        btnLogin.classList.remove('botao-desabilitado')
        btnLogin.classList.add('botao-habilitado')
    }
    else{
        btnLogin.setAttribute('disabled', 'disabled')
        btnLogin.classList.remove('botao-habilitado')
        btnLogin.classList.add('botao-desabilitado')
    }
}