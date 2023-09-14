const numero_aleatorio = Math.floor(Math.random() * 100);
// alert(numero_aleatorio)

const tentativa_input = document.getElementById("tentativa_input")
// alert(tentativa_input)

const verificar_button = document.getElementById("verificar_button")

const resultado_menssagem = document.getElementById("resultado_menssagem")


verificar_button.addEventListener("click", function () {
    // alert(tentativa_input.value)
    if (tentativa_input.value > 100 || tentativa_input.value < 0 || tentativa_input.value == "") {
        resultado_menssagem.innerHTML = 'Seu numero está fora de escopo'
        resultado_menssagem.classList.add("erro")
        resultado_menssagem.classList.remove("falha")
        resultado_menssagem.classList.remove("sucesso")
    }

    else {
        if (tentativa_input.value == numero_aleatorio) {
            resultado_menssagem.innerHTML = 'Parabens! Você acertou'
            resultado_menssagem.classList.add("sucesso")
            resultado_menssagem.classList.remove("falha")
            resultado_menssagem.classList.remove("erro")

        } else if (tentativa_input.value > numero_aleatorio) {
            resultado_menssagem.innerHTML = 'Seu numero é maior!!!!'
            resultado_menssagem.classList.add("falha")
            resultado_menssagem.classList.remove("sucesso")
            resultado_menssagem.classList.remove("erro")

        } else (tentativa_input.value < numero_aleatorio)
        resultado_menssagem.innerHTML = 'Seu numero é menor!!!!'
        resultado_menssagem.classList.add("falha")
        resultado_menssagem.classList.remove("sucesso")
        resultado_menssagem.classList.remove("erro")
    }

})

