function pegarDados() {

    let nomeCliente = formulario.nomeDoCliente.value
    let nomePet = formulario.nomeDoPet.value
    let servico = formulario.servico.value
    let transporte = formulario.transporte.value
    let data = formulario.data.value
    let horario = formulario.horario.value
    let desconto = formulario.desconto.value
    let pagamento = formulario.pagamento.value

    let horarioArr = horario.split(":")
    let hora = horarioArr[0];

    let dataHoje = new Date()

    let dataAgen = new Date(data)
    dataAgen.setUTCHours(15, 0, 0, 0);

    let barras = document.getElementById('barras');
    barras.innerHTML = '';

    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';

    if (nomeCliente.length < 3 || nomeCliente.length > 100) {
        erro.style.display = 'block';
        erro.innerHTML = ("Nome Inválido, Deve possuir mais de 3 caracteres e menos de 100 caracteres");
        return false;
    }

    if (nomePet.length < 3 || nomePet.length > 100) {
        erro.style.display = 'block';
        erro.innerHTML = ("Nome do Pet Inválido, Deve possuir mais de 3 caracteres e menos de 100 caracteres");
        return false;
    }


    if (data.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("Porfavor selecione uma Data");
        return false;
    }

    if (dataAgen < dataHoje) {
        erro.style.display = 'block';
        erro.innerHTML = ("Não, não faça isso Barry!! Não volte no tempo Denovo! ");
        return false;
    }

    if (dataAgen.getDay() == 0 || dataAgen.getDay() == 6) {

        erro.style.display = 'block';
        erro.innerHTML = ("Agendamentos só podem ser feitos de Segunda a Sexta-Feira");
        return false;
    }

    if (hora < 8 || hora > 18) {
        erro.style.display = 'block';
        erro.innerHTML = ("Agendamentos só podem ser entre 8:00 e 18:00");
        return false;
    }

    if (desconto.trim() == '' || desconto !== "LITTLE15") {
        desconto = "NÃO APLICADO";
    }

    if (desconto == "LITTLE15") {
        desconto = "5% DE CASHBACK"
    }


    let baritas = '<td>' + nomeCliente + '</td>' + '<td>' + nomePet + '</td>' + '<td>' + servico + '</td>' + '<td>' + transporte + '</td>' + '<td>' + data + '</td>' + '<td>' + horario + '</td>' + '<td>' + desconto + '</td>' + '<td>' + pagamento + '</td>' + '</tr>';



    grafico.style.display = 'flex';
    barras.innerHTML += baritas;

    let divDestino = document.getElementById("grafico");
    if (divDestino) {
        divDestino.scrollIntoView({ behavior: 'smooth' });
    }

    let reseteDeBotao = document.getElementById("btnResete");
    let formulario1 = document.getElementById("formulario");

    reseteDeBotao.addEventListener("click", () => {
        formulario1.reset();
    });

}




function sumirErro() {
    let tempoEspera = 2000;
    setTimeout("erro.style.display = ''", tempoEspera);
}






