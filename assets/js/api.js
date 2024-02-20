async function BuscarDadosDoPerfil(){
    const url = 'https://raw.githubusercontent.com/diegoalmeidaramos/portfolio/main/data/profile.json'
    const buscar = await fetch(url) //FETCH = BUSCAR//
    return await buscar.json()
}