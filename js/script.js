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




// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

function fazerid() {
    let id = document.getElementById('id');
    id.innerHTML = parseInt(Math.random() * 1000000000);
}

function validardados() {
    let erro = document.getElementById('erro1');
    let nome = frm1.nome.value;
    let ende = frm1.ende.value;
    let cid = frm1.cid.value;
    let uf = frm1.uf.value;
    let nascimento = frm1.data.value;
    let email = frm1.email.value;
    let senha = frm1.senhaBraba.value;
    let telefone = frm1.telefone.value;

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/
    let emailValido = padraoEmail.test(email);

    var padraoSenha = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%!?]).{8,}$/
    var senhaTestada = padraoSenha.test(senha);


    let padraoNumero = /^(\d{2}\s)?\d{4,5}(-?\d{4})?$/
    let numeroVerificado = padraoNumero.test(telefone);

    let anuario = nascimento.split("-")
    let ano = anuario[0];

    erro.style.backgroundColor = '';



    if (nome.trim() == '') {
        erro.innerHTML = "o campo nome não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (nome.length < 3) {
        erro.innerHTML = "o campo nome não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (nome.length > 100) {
        erro.innerHTML = "o campo nome não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (email < 3 || email > 100) {
        erro.innerHTML = "O Email não pode ter menos de 3 caracteres e mais de 100!";
        erro.style.display = 'block';
        return false;
    }

    if (emailValido == false) {
        erro.innerHTML = "O Email está incorreto ou não é valido!";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (senha.length < 8) {
        erro.style.display = 'block';
        erro.innerHTML = ("A Senha deve conter pelo menos 8 caracteres e não pode ser maior que 30 caracteres");
        return false;
    }

    if (senhaTestada == false) {
        erro.innerHTML = "Você deve usar uma Senha forte! Tente colocar letras Maisculas e Minusculas, Caracteres especiais e Numeros";
        erro.style.display = 'block';
        return false;
    }

    if (numeroVerificado == false) {
        erro.innerHTML = "Numero de Telefone Invalido!";
        erro.style.display = 'block';
        return false;
    }

    if (ano >= '2023') {
        erro.innerHTML = "Parece que você acabou de nascer ou ainda vai!";
        erro.style.display = 'block';
        return false;
    }
    if (ano.trim() == '') {
        erro.innerHTML = "Porfavor preencha uma data";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (ende.trim() == '') {
        erro.innerHTML = "o campo endereço não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (ende.length < 3) {
        erro.innerHTML = "o campo endereço não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (ende.length > 100) {
        erro.innerHTML = "o campo endereço não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    if (cid.trim() == '') {
        erro.innerHTML = "o campo cidade não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (cid.length < 3) {
        erro.innerHTML = "o campo cidade não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (cid.length > 50) {
        erro.innerHTML = "o campo cidade não pode ter mais de 50 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    // 
    else {
        erro.style.display = 'none';
    }
    // 
    if (uf.length >= 2) {
        let padrao = /^[A-Z]{2}$/
        if (padrao.test(uf) == false) {
            erro.innerHTML = "Coloque em maiuscula a unidade federativa!";
            erro.style.display = 'block';
            return false;
        }
        else {
            erro.style.display = 'none';
        }
    }
    else {
        erro.innerHTML = "Coloque uma unidade federativa válida!";
        erro.style.display = 'block';
        return false;
    }

    let reseteDeBotao = document.getElementById("btnCadastro");
    let formulario1 = document.getElementById("frm1");

    reseteDeBotao.addEventListener("click", () => {
        formulario1.reset();
    });

    erro.style.display = 'block';
    erro.style.backgroundColor = 'greenyellow';
    erro.innerHTML = ("CADASTRO REALIZADO COM SUCESSO🥳🥳!!");

    setTimeout(() => erro.style.display = "", 3000);


};


function validarDadosPet() {

    let nomePet = frm2.nomePet.value;
    let idadePet = frm2.idadePet.value;

    let erro = document.getElementById('erro2');

    let verificacaoIdadePet = /^(\d{1,2} )?(\d{1,2} )?(\d{1,2})?$/;
    let idadePetVerificada = verificacaoIdadePet.test(idadePet)


    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';

    if (nomePet.trim() == '') {
        erro.innerHTML = "o campo nome do Pet não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (nomePet.length < 3) {
        erro.innerHTML = "o campo nome do Pet não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (nomePet.length > 100) {
        erro.innerHTML = "o campo nome do Pet não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if (idadePetVerificada == false || idadePet.trim() == "") {
        erro.innerHTML = "Porfavor coloque uma Idade do Pet valida, Anos, Meses, Dias!";
        erro.style.display = 'block';
        return false;
    }

    let tipoPet = frm2.tipoPet.value;

    if (window.getComputedStyle(caixatipopet).display !== 'none') {

        console.log("A")

        if (tipoPet.trim() == "") {
            erro.innerHTML = "Porfavor preencha o campo Tipo do Pet!";
            erro.style.display = 'block';
            console.log("b")

            return false;

        }

    }
    let reseteDeBotao = document.getElementById("btnCadastroPet");
    let formulario1 = document.getElementById("frm2");

    reseteDeBotao.addEventListener("click", () => {
        formulario1.reset();
    });

    erro.style.display = 'block';
    erro.style.backgroundColor = 'greenyellow';
    erro.innerHTML = ("CADASTRO DO PET REALIZADO COM SUCESSO🥳🥳!!");

    setTimeout(() => erro.style.display = "", 3000);



}


function mostraOutro(select) {
    let tipoPet = document.getElementById('caixatipopet');
    if (select.value === "Outros") {
        tipoPet.style.display = 'block';
    } else {
        tipoPet.style.display = "none";
    }
}




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
        backgroundColor: "#3ABD8F",
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
        title: "Quais as principais raças de cachorros que nós atendemos, em média, em um mês",
        width: 600,
        height: 400,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        backgroundColor: "#3ABD8F",
        hAxis: { gridlines: { color: 'black' } },
    };
    var chart = new google.visualization.BarChart(document.getElementById("Grafico2"));
    chart.draw(view, options);
};

// --------------------------------------------------------------------------------

// Gráfico 3

var aleatorioEspecies = Math.random() * 20;
var valoresCertosEspecies = Math.round(aleatorioEspecies);

var aleatorioEspecies2 = Math.random() * 20;
var valoresCertosEspecies2 = Math.round(aleatorioEspecies2);

var aleatorioEspecies3 = Math.random() * 20;
var valoresCertosEspecies3 = Math.round(aleatorioEspecies3);

var aleatorioEspecies4 = Math.random() * 20;
var valoresCertosEspecies4 = Math.round(aleatorioEspecies4);

var aleatorioEspecies5 = Math.random() * 20;
var valoresCertosEspecies5 = Math.round(aleatorioEspecies5);

var aleatorioEspecies6 = Math.random() * 20;
var valoresCertosEspecies6 = Math.round(aleatorioEspecies6);

var aleatorioEspecies7 = Math.random() * 20;
var valoresCertosEspecies7 = Math.round(aleatorioEspecies7);

var aleatorioEspecies8 = Math.random() * 20;
var valoresCertosEspecies8 = Math.round(aleatorioEspecies8);

var aleatorioEspecies9 = Math.random() * 10;
var valoresCertosEspecies9 = Math.round(aleatorioEspecies9);

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Principais espécies de animais que cuidamos", { role: "style" }],
        ["Calopsitas", valoresCertosEspecies, "#004c90"],
        ["Equinos", valoresCertosEspecies2, "#116db5"],
        ["Peixes pequenos", valoresCertosEspecies3, "#095da3"],
        ["Hamsters", valoresCertosEspecies4, "#1a7ec8"],
        ["Porquinhos-da-Índia", valoresCertosEspecies5, "#228eda"],
        ["Ovinos", valoresCertosEspecies6, "#004c90"],
        ["Suínos", valoresCertosEspecies7, "#116db5"],
        ["Capivaras", valoresCertosEspecies8, "#095da3"],
        ["Animais exóticos", valoresCertosEspecies9, "#1a7ec8"],
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
        title: "Quais as demais espécies de animais que nós tratamos, em média, em um mês",
        width: 600,
        height: 400,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        backgroundColor: "#3ABD8F",
        hAxis: { gridlines: { color: 'black' } },
    };
    var chart = new google.visualization.BarChart(document.getElementById("Grafico3"));
    chart.draw(view, options);
};

// --------------------------------------------------------------------------------

// Gráfico 4

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Vendas', 'Atendimentos'],
        ['2017', 1372, 1334],
        ['2018', 1724, 2310],
        ['2019', 1260, 2070],
        ['2020', 1927, 3012],
        ['2021', 2041, 2417],
        ['2022', 2743, 3120],
    ]);

    var options = {
        title: 'Desempenho da empresa em relação à vendas e atendimentos',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: "#3ABD8F",
        vAxis: { gridlines: { color: 'black' } },
        colors: ['#004c90', '#1a7ec8']
    };

    var chart = new google.visualization.LineChart(document.getElementById('Grafico4'));

    chart.draw(data, options);
};

// --------------------------------------------------------------------------------

// Gráfico 5

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart5);
function drawChart5() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['⭐', 2],
        ['⭐⭐', 2],
        ['⭐⭐⭐', 2],
        ['⭐⭐⭐⭐', 7],
        ['⭐⭐⭐⭐⭐', 2],
    ]);

    var options = {
        title: 'Avaliações',
        pieHole: 0.4,
        backgroundColor: '#3ABD8F',
        colors: ['#F01A01', '#FF6C25', '#FFFF02', '#00FF00', '#39A300'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('Grafico5'));
    chart.draw(data, options);
}