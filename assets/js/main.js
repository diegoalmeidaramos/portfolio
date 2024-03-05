function atualizarInfoPerfil(dadosDoPerfil){
   const foto = document.getElementById('perfil.foto')
    foto.innerText = dadosDoPerfil.foto

   const nome = document.getElementById('perfil.nome')
    nome.innerText = dadosDoPerfil.nome
   
   const cargo = document.getElementById('perfil.cargo')
    cargo.innerText = dadosDoPerfil.cargo
    cargo.href = `https://www.linkedin.com/in/diego-ramos-6333b7262/:${dadosDoPerfil.cargo}`
   
   const localizacao = document.getElementById('perfil.localizacao')
    localizacao.innerText = dadosDoPerfil.localizacao

   const fone = document.getElementById('perfil.fone')
    fone.innerText = dadosDoPerfil.fone
    fone.href = `tel:${dadosDoPerfil.fone}`

    const email = document.getElementById('perfil.email')
    email.innerText = dadosDoPerfil.email; 
    email.href = `mailto:${dadosDoPerfil.email}`


 
   

    
    
    
    
   
   

}

function atualizarHabilidadesPessoais(dadosDoPerfil){
   const habilidades = document.getElementById('perfil.habilidades.pessoal')

    habilidades.innerHTML =  dadosDoPerfil.perfil.habilidades.pessoal.map(habilidades => `<li>${habilidades}</li>`).join('')
}




(async () => {

    const dadosDoPerfil = await buscarDadosDoPerfil()
        atualizarInfoPerfil(dadosDoPerfil)
        atualizarHabilidadesPessoais(dadosDoPerfil)
})()