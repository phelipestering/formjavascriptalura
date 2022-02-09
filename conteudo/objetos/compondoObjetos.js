const inspetor = {
    nome: "Emerson Barbosa",
    idade: 24,
    cpf: "1234534243",
    email:"emerson.barbosa@intertek.com",
    fones: ["97523006", "9876649"]
}

inspetor.qualificacoes = {
    solda: "fbts",
    eletrica: "IF-EL",
    mecanica: "CD-CL"
}

console.log(inspetor)

inspetor.qualificacoes.solda = "NACE"

console.log(inspetor)