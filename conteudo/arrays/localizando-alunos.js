const alunos = [
    'daniel', 'clodoaldo', 'alvaro', 'sergio salvio', 'antonio lino'
];

const mediaAlunos = [10,7,9,6];

let listaDeNotasAlunos = [alunos, mediaAlunos]

let listaDeNotasEAlunos = [
    alunos, mediaAlunos
];

const exibeNomeNota = (nomeDoAluno)=>{
    if(listaDeNotasAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasAlunos[0][indice] + ',sua media é ' + listaDeNotasAlunos[1][indice]
    }else{
        return "Aluno nao esta cadastrado"
    }
};

console.log(exibeNomeNota("daniel"))