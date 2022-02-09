const cliente = {
    nome: "Emerson Barbosa",
    idade: 24,
    cpf: "1234534243",
    email:"emerson.barbosa@intertek.com",
    fones: ["97523006", "9876649"]
}

// cliente.fones.forEach(fone => console.log(fone))


let relatorio = "";

for (let info in cliente){
    if (typeof cliente [info] === "object" || typeof cliente[info] === "function")
    {
        continue 

    }else{
        relatorio += `
         - ${info} ===> ${cliente[info]}
         `
    }
    
}

console.log (typeof cliente.depositar)

console.log(relatorio)

