// Responsável por capturar os dados do formulário e abrir o WhatsApp.

function enviarParaWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const interesse = document.getElementById('interesse').value;
    const mensagem = document.getElementById('mensagem').value;

    if (interesse === "" || interesse === "Interesse em:") {
        alert("Por favor, selecione uma opção de interesse.");
        return;
    }

    // Substituir pelo número real da clínica
    const numeroClinica = "5512999999999"; 

    // Montagem do texto da mensagem
    // O código %0A é interpretado pelo WhatsApp como uma quebra de linha
    const texto = `*Olá! Gostaria de fazer um agendamento.*%0A%0A` +
                  `*Nome:* ${nome}%0A` +
                  `*Telefone:* ${telefone}%0A` +
                  `*E-mail:* ${email}%0A` +
                  `*Interesse:* ${interesse}%0A` +
                  `*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/${numeroClinica}?text=${texto}`;

    window.open(url, '_blank');

     event.target.reset();
}