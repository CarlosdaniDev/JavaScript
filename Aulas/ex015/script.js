function carregar() {


var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 0 && hora < 12) {
    //Bom Dia
    img.src = `imagens/manha.png`
    document.body.style.background = "#e2cd9f"
} else if  
    (hora >= 18 && hora <= 24 ) {
img.src = 'imagens/noite.png'
document.body.style.background = "#515154"
    }
    //Boa Noite
    else {
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#885151"
//Boa Tarde
    }
    


}