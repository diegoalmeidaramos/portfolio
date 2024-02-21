async function buscarDadosDoPerfil(){
    const url = 'https://raw.githubusercontent.com/diegoalmeidaramos/portfolio/main/data/profile.json'
    const buscar = await fetch(url) //FETCH = BUSCAR//
    return await buscar.json()
}