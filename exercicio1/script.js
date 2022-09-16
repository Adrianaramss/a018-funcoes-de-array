const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//A. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
 const caixaAlta = (parametro1) => {
     return {
    nome: parametro1.nome.toUpperCase(),
    profissao: parametro1.profissao.toUpperCase(),
    username: parametro1.username.toUpperCase(),
    senha: parametro1.senha.toUpperCase(),


    }
 }
console.log(caixaAlta(objeto));


//B. A segunda deve retornar os valores do objeto como texto corrido.
const txtcorrido = (parametro) => {
    let parametrotxtcorrido = (`${parametro.nome}, ${parametro.profissao}, ${parametro.username}, ${parametro.senha} `)
    return  parametrotxtcorrido 

}
console.log(txtcorrido(objeto))


/// c 

  const funcao3 = (objeto,callback) => {
    console.log (callback(objeto))
  }
funcao3(objeto,caixaAlta)
funcao3(objeto,txtcorrido)




