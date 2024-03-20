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
   const habilidadesPessoais = document.getElementById('perfil.habilidades.habilidadesPessoais')

    habilidadesPessoais.innerHTML =  dadosDoPerfil.habilidades.habilidadesPessoais.map(habilidade => `<li>${habilidade}</li>`).join('')
}

function atualizarHabilidadesProfissioais(dadosDoPerfil){
    const habilidadesProfissionais = document.getElementById('perfil.habilidades.habilidadesProfissionais')
 
     habilidadesProfissionais.innerHTML =  dadosDoPerfil.habilidades.habilidadesProfissionais.map(habilidade => `<li><img src="${habilidade.logo}" alt="${habilidade.name}" title="${habilidade.name}"</li>`).join('')
}

(async () => {

    const dadosDoPerfil = await buscarDadosDoPerfil()
        atualizarInfoPerfil(dadosDoPerfil)
        atualizarHabilidadesPessoais(dadosDoPerfil)
        atualizarHabilidadesProfissioais(dadosDoPerfil)
})()