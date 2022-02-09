const cliente = {
    nome: "Phelipe",
    idade: 24,
    cpf: "1234534243",
    email:"zeruela@email.com"
}

console.log(cliente)

//adicionamento campo fone

cliente.fone = "975232206"

console.log(cliente)

// alterando o numero de telefone

cliente.fone = "9752399006"

console.log(cliente)

// deletando a propriedade

delete cliente.fone

console.log(cliente)