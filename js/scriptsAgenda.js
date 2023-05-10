function pegarDados() {

    let nomeCliente = formulario.nomeDoCliente.value
    let nomePet = formulario.nomeDoPet.value
    let servico = formulario.servico.value
    let transporte = formulario.transporte.value
    let data = formulario.data.value
    let horario = formulario.horario.value
    let desconto = formulario.desconto.value
    let pagamento = formulario.pagamento.value

    let barras = document.getElementById('barras');
    barras.innerHTML = '';

    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';

    if (nomeCliente < 3 || nomeCliente > 100) {
        erro.style.display = 'block';
        erro.innerHTML = ("Nome Inválido, Deve possuir mais de 3 caracteres e menos de 100 caracteres");
        return false;
    }

    if (nomePet < 3 || nomePet > 100) {
        erro.style.display = 'block';
        erro.innerHTML = ("Nome do Pet Inválido, Deve possuir mais de 3 caracteres e menos de 100 caracteres");
        return false;
    }






    let baritas = '<td>' + nomeCliente + '</td>' + '<td>' + nomePet + '</td>' + '<td>' + servico + '</td>' + '<td>' + transporte + '</td>' + '<td>' + data + '</td>' + '<td>' + horario + '</td>' + '<td>' + desconto + '</td>' + '<td>' + pagamento + '</td>' + '</tr>';



    grafico.style.display = 'flex';
    barras.innerHTML += baritas;

}


var meuBotao = document.getElementById("btnResete");
var minhaDiv = document.getElementById("erro");

meuBotao.addEventListener("click", () => {
  minhaDiv.scrollIntoView({ behavior: "smooth" });
});

function sumirErro() {
    let tempoEspera = 2000;
    setTimeout("erro.style.display = ''", tempoEspera);
}


var reseteDeBotao = document.getElementById("btnResete");
var formulario = document.getElementById("formulario");

reseteDeBotao.addEventListener("click", () => {
    formulario.reset();
});




// if (desconto.trim() == '') {

//     let desconto = "NÃO APLICADO";
//     baritas = '<td>' + nomeCliente + '</td>' + '<td>' + nomePet + '</td>' + '<td>' + servico + '</td>' +
//         '<td>' + transporte + '</td>' +
//         '<td>' + data + '</td>' +
//         '<td>' + horario + '</td>' +
//         '<td>' + desconto + '</td>' +
//         '<td>' + pagamento + '</td>' + '</tr>';

//     barras.innerHTML += baritas;
    
// } else {

//     if (desconto == "LITTLE")












//     baritas = '<td>' + nomeCliente + '</td>' + '<td>' + nomePet + '</td>' + '<td>' + servico + '</td>' +
//         '<td>' + transporte + '</td>' +
//         '<td>' + data + '</td>' +
//         '<td>' + horario + '</td>' +
//         '<td>' + desconto + '</td>' +
//         '<td>' + pagamento + '</td>' + '</tr>';

//     barras.innerHTML += baritas;
// }