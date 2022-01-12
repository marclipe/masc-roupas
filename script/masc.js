function enviar() {

    var nome = window.document.getElementById('txtnome') 

    var res = window.document.querySelector('section#res')
    if(nome.value.lenght == 0 ) {
        window.alert('ERRO - Campo vazio')
    }
    else {
        window.alert(`Ok ${nam} vamos entrar em contato!`)
    }

    res.innerHTML = `Ok ${nome} vamos entrar em contato assim que puder!`
    
}


