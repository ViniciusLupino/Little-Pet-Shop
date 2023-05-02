

function pegarEmail() {

    var erro = document.getElementById('erro');
    var email = document.getElementById("barraEmail").value;
    var senha = document.getElementById("barraSenha").value;



    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';


    if (senha.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo da Data não pode estar vazio");
        return false;
    }


// --------------------------------------------------------------------------------



    //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/
    let emailValido = padraoEmail.test(email);

    if (emailValido) {
        console.log("Email valido");
    } else {
        console.log("Email não é valido", email);
    }

// --------------------------------------------------------------------------------


    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;

    let SenhaIsValid = padraoSenha.test(senha);

    if (!SenhaIsValid) {
        console.log('Campo SENHA não corresponde ao padrão desejado!');
    }


}


const password = document.getElementById('barraSenha');
const icon = document.getElementById('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}

