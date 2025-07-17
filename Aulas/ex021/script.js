function gerar() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('txttab')

    var n = Number(num.value)

    if (num.value.length ==0) {
        alert (`Por favor digite um número!`)
    } else {
    /*    var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//Essa linha faz mais sentido para outras linguagens como php, ela adiciona um value para cada option do select.
            tab.appendChild(item)
            c++
        }*/
       tab.innerHTML = ''
        for (var c=1; c <=10; c++) {
            var item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

}