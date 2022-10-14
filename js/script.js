function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1;
        }

        //Contagem crescente
        if(i < f) {
            for(let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont}  \u{1F449}`;
            }
        } else {
        //Contagem regressiva
            for(let cont = i; cont >= f; cont -=p){
                res.innerHTML += `${cont} \u{1F449}`; 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}