const forma = 'triangulo';
const altu = 5;
const compr = 7;

let area;

if(forma === 'quadrado'){
    area = altu * compr;
}else {
    area = (altu * compr) / 2;
}

console.log(area);