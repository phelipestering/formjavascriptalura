const palavras = [
    'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
    'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
    'forEach', 'map', 'reduce', 'reduceRight', 'filter',
    'some', 'every', 'isArray'
]

let qty_palavras = [palavras.length]
let grupo1 = palavras.slice(0,palavras.length/2)
let grupo2 = palavras.slice(palavras.length/2)

function texto(){
    return `existem ${qty_palavras} palavras, primeiro grupo: ${grupo1}`
}


function texto2(){
    return `existem ${qty_palavras} palavras, segundo grupo: ${grupo2} `
}

console.log(texto(), texto2())

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

