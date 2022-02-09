const cliente = {
    nome: "Paulo Ferreira",
    idade: 24,
    cpf: "1234534243",
    email:"pauloxferreira@email.com",
    saldo:100,

    depositar:function (valor){
        this.saldo+=valor
    }
}

console.log(`Bem vindo ${cliente.nome} sua idade é ${cliente.idade} os primerios numeros de seu cpf é 
${cliente.cpf.substring(0,3)}`)

console.log(cliente.saldo);
cliente.depositar(40);
console.log(cliente.saldo);

