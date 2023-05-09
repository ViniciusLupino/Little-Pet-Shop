

function pegarEmail() {

    let erro = document.getElementById('erro');
    let email = document.getElementById("barraEmail").value;
    let senha = document.getElementById("barraSenha").value;

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/
    let emailValido = padraoEmail.test(email);

    let verificarSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/
    let senhaValida = verificarSenha.test(senha);



    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';


    if (senha.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo Senha não pode estar em branco");
        return false;
    }

    if (senha.length < 8) {
        erro.style.display = 'block';
        erro.innerHTML = ("A Senha deve conter pelo menos 8 caracteres");
        return false;
    }

    else {

        if (emailValido) {
            window.location.replace("Home.html");
        }

        else {
            erro.style.display = 'block';
            erro.innerHTML = ("O Email é Invalido");
            return false;
        }

    }
    // --------------------------------------------------------------------------------



    // --------------------------------------------------------------------------------


    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;

    let SenhaIsValid = padraoSenha.test(senha);

    if (!SenhaIsValid) {
        console.log('Campo SENHA não corresponde ao padrão desejado!');
    }


}


const password = document.getElementById('barraSenha');
const icon = document.getElementById('icon');

function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        icon.classList.add('hide')
    }
    else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































function fazerid(){
    let id = document.getElementById('id');
    id.innerHTML = parseInt(Math.random()*1000000000);
}

function validardados(){
    let erro = document.getElementById('erro1');
    let nome = frm1.nome.value;
    let ende = frm1.ende.value;
    let cid = frm1.cid.value;
    let uf = frm1.uf.value;

    if (nome.trim() == ''){
        erro.innerHTML = "o campo nome não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (nome.length < 3){
        erro.innerHTML = "o campo nome não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (nome.length > 100){
        erro.innerHTML = "o campo nome não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (ende.trim() == ''){
        erro.innerHTML = "o campo endereço não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (ende.length < 3){
        erro.innerHTML = "o campo endereço não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (ende.length > 100){
        erro.innerHTML = "o campo endereço não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (cid.trim() == ''){
        erro.innerHTML = "o campo cidade não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (cid.length < 3){
        erro.innerHTML = "o campo cidade não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (cid.length > 50){
        erro.innerHTML = "o campo cidade não pode ter mais de 50 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    else{
        erro.style.display = 'none';
    }
    // 
    if (uf.length >= 2){
        let padrao = /^[A-Z]{2}$/
        if (padrao.test(uf) == false){
            erro.innerHTML = "Coloque em maiuscula a unidade federativa!";
            erro.style.display = 'block';
            return false;
        }
        else{
            erro.style.display = 'none';
        }
    }
    else{
        erro.innerHTML = "Coloque uma unidade federativa válida!";
        erro.style.display = 'block';
        return false;
    }
};