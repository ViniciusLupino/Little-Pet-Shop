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

// --------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------

// Gráfico 1

var aleatorio = Math.random() * 20;
var valoresCertos = Math.round(aleatorio);

var aleatorio1 = Math.random() * 20;
var valoresCertos1 = Math.round(aleatorio1);

var aleatorio2 = Math.random() * 20;
var valoresCertos2 = Math.round(aleatorio2);

var aleatorio3 = Math.random() * 20;
var valoresCertos3 = Math.round(aleatorio3);

var aleatorio4 = Math.random() * 20;
var valoresCertos4 = Math.round(aleatorio4);

var aleatorio5 = Math.random() * 20;
var valoresCertos5 = Math.round(aleatorio5);


google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Atendimento diário", { role: "style" }],
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
        vAxis: { gridlines: { color: 'black' } },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("Grafico1"));
    chart.draw(view, options);
}

// --------------------------------------------------------------------------------

// Gráfico 2

var aleatorioCachorros1 = Math.random() * 20;
var valoresCertosCachorros1 = Math.round(aleatorioCachorros1);

var aleatorioCachorros2 = Math.random() * 20;
var valoresCertosCachorros2 = Math.round(aleatorioCachorros2);

var aleatorioCachorros3 = Math.random() * 20;
var valoresCertosCachorros3 = Math.round(aleatorioCachorros3);

var aleatorioCachorros4 = Math.random() * 20;
var valoresCertosCachorros4 = Math.round(aleatorioCachorros4);

var aleatorioCachorros5 = Math.random() * 20;
var valoresCertosCachorros5 = Math.round(aleatorioCachorros5);

var aleatorioCachorros6 = Math.random() * 20;
var valoresCertosCachorros6 = Math.round(aleatorioCachorros6);

var aleatorioCachorros7 = Math.random() * 20;
var valoresCertosCachorros7 = Math.round(aleatorioCachorros7);

var aleatorioCachorros8 = Math.random() * 20;
var valoresCertosCachorros8 = Math.round(aleatorioCachorros8);

var aleatorioCachorros9 = Math.random() * 20;
var valoresCertosCachorros9 = Math.round(aleatorioCachorros9);

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Principais raças de cachorros que cuidamos", { role: "style" }],
        ["Spitz Alemão Anão - Pomerânia", valoresCertosCachorros1, "#004c90"],
        ["Bulldog Francês", valoresCertosCachorros2, "#116db5"],
        ["Rottweiler", valoresCertosCachorros3, "#095da3"],
        ["Pug", valoresCertosCachorros4, "#1a7ec8"],
        ["Golden Retriever", valoresCertosCachorros5, "#228eda"],
        ["Pastor Alemão", valoresCertosCachorros6, "#004c90"],
        ["Yorkshire Terrier", valoresCertosCachorros7, "#116db5"],
        ["Border Collie", valoresCertosCachorros8, "#095da3"],
        ["Sem raça definida", valoresCertosCachorros9, "#1a7ec8"],
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
        title: "Quais as principais raças de cachorros que nós tratamos, em média, em um mês",
        width: 600,
        height: 400,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        backgroundColor: "#4AF0B6",
        hAxis: { gridlines: { color: 'black' } },
    };
    var chart = new google.visualization.BarChart(document.getElementById("Grafico2"));
    chart.draw(view, options);
};

// --------------------------------------------------------------------------------

