function verificarResposta(eCorreta) {
    const resultadoTexto = document.getElementById("resultado");
    
    if (eCorreta) {
        resultadoTexto.innerText = "🌱 Correto! A rotação de culturas evita o desgaste do solo e reduz pragas.";
        resultadoTexto.style.color = "#2e7d32";
    } else {
        resultadoTexto.innerText = "❌ Tente novamente! Plantar sempre a mesma coisa esgota os nutrientes do solo.";
        resultadoTexto.style.color = "#d32f2f";
    }
}