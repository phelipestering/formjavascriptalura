const cliente = {
    nome: "ze ruela",
    idade: 24,
    cpf: "1234534243",
    email:"zeruela@email.com"
}

// pegando os dados do cliente no array
const chaves = ["nome", "idade", "cpf", "email"]
// pegando a posicao do array
console.log(cliente[chaves[0,3]])

// pegando todos os dados do array
chaves.forEach(info=>console.log(cliente[info]))