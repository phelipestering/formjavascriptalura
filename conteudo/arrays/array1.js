var notas = [9, 10 , 7];
notas.push(6);
console.log(notas);

var media = (notas[0] + notas[1] + notas[2] + notas[3])/Array.length

var qtyNotas = [notas.length]

console.log(exibeMedia());

function exibeMedia(){
    return `a media de notas é com ${media} considerando ${qtyNotas} notas `
}


