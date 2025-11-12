let res = document.getElementById('res')
let btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', ()=>{
    let email = document.getElementById('email').value
    let senha = Number(document.getElementById('senha').value)

    const valores = {
        email: email, 
        senha: senha
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML = ''
        res.innerHTML += dados.message
    })
})