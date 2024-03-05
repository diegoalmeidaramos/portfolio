function atualizarInfoPerfil(dadosDoPerfil){
   const foto = document.getElementById('perfil.foto')
    foto.innerText = dadosDoPerfil.foto

   const nome = document.getElementById('perfil.nome')
    nome.innerText = dadosDoPerfil.nome
   
   const cargo = document.getElementById('perfil.cargo')
    cargo.innerText = dadosDoPerfil.cargo
   
   const localizacao = document.getElementById('perfil.localizacao')
    localizacao.innerText = dadosDoPerfil.localizacao

   const fone = document.getElementById('perfil.fone')
    fone.innerText = dadosDoPerfil.fone
    fone.href = `tel:${dadosDoPerfil.fone}`

   const email = document.getElementById('perfil.email')
    email.innerText = dadosDoPerfil.email
    email.href = `mailto:${dadosDoPerfil.email}`
   

    
    
    
    
   
   

}




(async () => {

    const dadosDoPerfil = await buscarDadosDoPerfil()
        atualizarInfoPerfil(dadosDoPerfil)

})()