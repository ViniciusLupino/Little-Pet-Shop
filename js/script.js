function abrirNovaPagina() {
    window.location.replace("Home.html");
}

function pegarEmail() {

    let erro = document.getElementById('erro');
    let email = document.getElementById("barraEmail").value;
    let senha = document.getElementById("barraSenha").value;

    let emailAdm = "admin@teste.com.br"
    let senhaAdm = "!@#ABC123def"

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/
    let emailValido = padraoEmail.test(email);

    let verificarSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/
    let senhaValida = verificarSenha.test(senha);




    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';


    if (emailValido == true) {

        if (senha.trim() == '') {
            erro.style.display = 'block';
            erro.innerHTML = ("O campo Senha não pode estar em branco");
            return false;
        }

        if (senha.length < 8) {
            erro.style.display = 'block';
            erro.innerHTML = ("A Senha deve conter pelo menos 8 caracteres");
            return false;
        } else {

            if (email == emailAdm && senha == senhaAdm) {
                erro.style.display = 'block';
                erro.style.backgroundColor = 'greenyellow';

                erro.innerHTML = ("BEM VINDO ADMINISTRADOR");

                let tempoEspera = 2000;
                setTimeout(abrirNovaPagina, tempoEspera);

                return false;

            } else {
                // window.location.replace("Home.html");
                window.location.replace("Home.html");
            }
        }

    } else {
        erro.style.display = 'block';
        erro.innerHTML = ("O Email não é valido");
        return false;
    }

}




function showHide() {
    let password = document.getElementById('barraSenha');
    let icon = document.getElementById('icon');

    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        icon.classList.add('hide')
    }
    else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}

function sumirErro() {
    let tempoEspera = 2000;
    setTimeout("erro.style.display = ''", tempoEspera);
}

