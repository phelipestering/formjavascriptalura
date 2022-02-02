const nomes = ["andre", "antonio", "lino"];

const notas = [7, 90, 5]

const reprovados = nomes.filter((nomes, indice) => notas [indice] < 10)

console.log(`reprovados: ${reprovados}`)