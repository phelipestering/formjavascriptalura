const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12543652266',
    email: 'andre@email.com',
    fones: [ '5591235498', '5521988743124' ],
    
    saldo:100,
    depositar:function(valor){
      this.saldo += valor
    }
  }

function oferecerSeguro (obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.table(`Oferta de seguro para ${obj.nome}`)
    }else{
        console.log(`nao tem dependentes`)
    }
}


console.table(Object.entries(cliente))
oferecerSeguro(cliente)
