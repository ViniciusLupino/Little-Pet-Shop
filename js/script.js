

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

// *****************************************************

var aleatorio = Math.random() * 10;
var valoresCertos = Math.round(aleatorio);
var aleatorio1 = Math.random() * 10;
var valoresCertos1 = Math.round(aleatorio1);
var aleatorio2 = Math.random() * 10;
var valoresCertos2 = Math.round(aleatorio2);
var aleatorio3 = Math.random() * 10;
var valoresCertos3 = Math.round(aleatorio3);
var aleatorio4 = Math.random() * 10;
var valoresCertos4 = Math.round(aleatorio4);
var aleatorio5 = Math.random() * 10;
var valoresCertos5 = Math.round(aleatorio5);


google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" }],
        ["Segunda-feira", valoresCertos1, "#00769f"],
        ["Terça-feira", valoresCertos2, "#069ac5"],
        ["Quarta-feira", valoresCertos3, "#0388b2"],
        ["Quinta-feira", valoresCertos4, "#09acd7"],
        ["Sexta-feira", valoresCertos5, "#0cbeea"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Média de agendamentos por dia na semana",
        width: 600,
        height: 400,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        backgroundColor: "#4AF0B6",
        vAxis: {gridlines:{color: 'black'}},
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("Grafico1"));
    chart.draw(view, options);
}

