let res = document.getElementById('res')
let lerDados = document.getElementById('lerDados')
let logado = localStorage.getItem('statusLog')
console.log('status', logado)


if(logado === 'true'){
lerDados.addEventListener('mouseover', ()=> {
        fetch('http://localhost:3000/login')
        .then(resp => resp.json())
        .then(dados =>{
        res.innerHTML = ''
        res.innerHTML += `email: ${lerDados.email}`
        res.innerHTML += `senha: ${lerDados.senha}`
        console.log(dados)
    })
})
}else{
    location.href = './index.html'
 } 


logout.addEventListener('click', ()=>{
    localStorage.clear()
    location.href = './index.html'
})