document.getElementById("enviarWhatsapp").addEventListener("click", function() {
    // Obtendo os valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tipoEvento = document.getElementById("evento").value;
    var dataEvento = document.getElementById("data").value;
    var descricao = document.getElementById("descricao").value;
    var quantidadeCriancas = document.getElementById("quantidade_criancas").value;
    var faixaEtaria = document.getElementById("faixa_etaria").value;
    var brincadeirasAdultos = document.getElementById("brincadeiras_adultos").value;
    var outroContato = document.getElementById("outro_contato").value;
    var observacao = document.getElementById("observacao").value;

    // Formatando a mensagem
    var mensagem = `Olá, gostaria de solicitar um orçamento.\n\n` +
                   `Nome do(a) contratante: ${nome}\n` +
                   `E-mail: ${email}\n` +
                   `Tipo do evento: ${tipoEvento}\n` +
                   `Data do evento: ${dataEvento}\n` +
                   `Descrição: ${descricao}\n` +
                   `Quantidade de crianças: ${quantidadeCriancas}\n` +
                   `Faixa etária das crianças: ${faixaEtaria}\n` +
                   `Deseja brincadeiras com adultos? ${brincadeirasAdultos}\n` +
                   `Outro número para contato: ${outroContato}\n` +
                   `Observação: ${observacao}`;

    // Codificando a mensagem para uso na URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Criando a URL do WhatsApp
    var url = `https://wa.me/5581985901320?text=${mensagemCodificada}`;

    // Abrindo a URL do WhatsApp
    window.open(url, '_blank');
});
