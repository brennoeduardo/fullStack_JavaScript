 function soma(a, b){
    result = a + b 
    return result
 }

//console.log(soma(2, 2))

function dobro(x){ 
    alert("O dobro de " + x + " é " + (x *  2))
}
 
//dobro(5)


function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + '!')
}

//dizerOla()

function createUser(nome, email, senha, tipo = "admin"){
    const usuario = { 
        nome, // mesmo que nome: nome  
        email, 
        senha,
        tipo
    }
    console.log(usuario)
}

createUser("Brenno", "brenno@email.com", "123")