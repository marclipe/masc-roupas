function enviar() {

    var nome = window.document.getElementById('nome') 
    var email = window.document.getElementById('email')
    var num = window.document.getElementById('num')
    var res = window.document.querySelector('article#res')
    if (nome.value.length == 0 || email.value.length == 0 || num.value.length == 0) {
        window.alert('ERRO - Campo vazio')
    }
    else {
        res.innerHTML = `<strong>Obrigado! vamos entrar em contato assim que puder!</strong>`
    }
    res.style.textAlign = 'center'
    
}


